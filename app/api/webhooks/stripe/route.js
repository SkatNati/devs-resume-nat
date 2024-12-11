import { headers } from "next/headers";
import Stripe from "stripe";
import { NextResponse } from "next/server";
import { stripe } from "../../lib/stripe";
import UserSubscription from "@/app/util/model/UserSubscription";
import BillingHistory from "@/app/util/model/BillingHistory";

export async function POST(request) {
    const body = await request.text();
    const signature = headers().get("Stripe-Signature") ?? "";

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET || ""
        );
    } catch (err) {
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }

    const session = event.data.object;

    switch (event.type) {
        case "checkout.session.completed":
            await handleCheckoutSessionCompleted(session);
            break;
        case "invoice.payment_succeeded":
            await handleInvoicePaymentSucceeded(session);
            break;
        case "customer.subscription.updated":
            await handleSubscriptionUpdated(session);
            break;
        case "charge.updated":
            await handleChargeUpdated(session);
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    return new Response(null, { status: 200 });
}

async function handleCheckoutSessionCompleted(session) {
    const subscription = await stripe.subscriptions.retrieve(session.subscription);
    const paymentMethod = await stripe.paymentMethods.retrieve(subscription.default_payment_method);
    const product = await stripe.products.retrieve(subscription.items.data[0].price.product);

    if (!session?.metadata?.userId) {
        return new NextResponse("User Id is required", { status: 400 });
    }

    await UserSubscription.create({
        user: session.metadata.userId,
        stripeCustomerId: subscription.customer,
        stripeSubscriptionId: subscription.id,
        plan: subscription.items.data[0].price.product,
        planName: product.name,
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
        cardBrand: paymentMethod.card.brand,
        cardLast4: paymentMethod.card.last4,
        stripePaymentMethodId: subscription.default_payment_method,
    });

    // Check if billing history entry already exists
    const existingBilling = await BillingHistory.findOne({
        user: session.metadata.userId,
        stripeSubscriptionId: subscription.id,
        priceId: subscription.items.data[0].price.id,
        date: new Date().toDateString(), // Ensure this matches the date format in your database
    });

    if (!existingBilling) {
        await BillingHistory.create({
            user: session.metadata.userId,
            stripeSubscriptionId: subscription.id,
            priceId: subscription.items.data[0].price.id,
            planName: product.name,
            status: session.payment_status,
            amount: subscription.items.data[0].price.unit_amount / 100, // Stripe amounts are in cents
            cardBrand: paymentMethod.card.brand,
            cardLast4: paymentMethod.card.last4,
            date: new Date(),
        });
    }
}

async function handleInvoicePaymentSucceeded(invoice) {
    const subscription = await stripe.subscriptions.retrieve(invoice.subscription);
    const product = await stripe.products.retrieve(subscription.items.data[0].price.product);
    const paymentMethod = await stripe.paymentMethods.retrieve(subscription.default_payment_method);

    const userSubscription = await UserSubscription.findOne({
        stripeSubscriptionId: subscription.id,
    });

    if (!userSubscription) {
        return new NextResponse("User subscription not found", { status: 404 });
    }

    await UserSubscription.findOneAndUpdate(
        { stripeSubscriptionId: subscription.id },
        {
            stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
            plan: subscription.items.data[0].price.product,
            planName: product.name,
            stripePriceId: subscription.items.data[0].price.id,
        },
        { new: true }
    );

    // Check if billing history entry already exists
    const existingBilling = await BillingHistory.findOne({
        user: userSubscription.user,
        stripeSubscriptionId: subscription.id,
        priceId: subscription.items.data[0].price.id,
        date: new Date().toDateString(), // Ensure this matches the date format in your database
    });

    if (!existingBilling) {
        await BillingHistory.create({
            user: userSubscription.user,
            stripeSubscriptionId: subscription.id,
            priceId: subscription.items.data[0].price.id,
            planName: product.name,
            status: invoice.status,
            amount: invoice.amount_paid / 100, // Stripe amounts are in cents
            cardBrand: paymentMethod.card.brand,
            cardLast4: paymentMethod.card.last4,
            date: new Date(),
        });
    }
}

async function handleSubscriptionUpdated(subscription) {
    const product = await stripe.products.retrieve(subscription.items.data[0].price.product);
    const paymentMethod = await stripe.paymentMethods.retrieve(subscription.default_payment_method);

    const userSubscription = await UserSubscription.findOne({
        stripeSubscriptionId: subscription.id,
    });

    if (!userSubscription) {
        return new NextResponse("User subscription not found", { status: 404 });
    }

    await UserSubscription.findOneAndUpdate(
        { stripeSubscriptionId: subscription.id },
        {
            stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
            plan: subscription.items.data[0].price.product,
            planName: product.name,
            stripePriceId: subscription.items.data[0].price.id,
        },
        { new: true }
    );

    // Check if billing history entry already exists
    const existingBilling = await BillingHistory.findOne({
        user: userSubscription.user,
        stripeSubscriptionId: subscription.id,
        priceId: subscription.items.data[0].price.id,
        date: new Date().toDateString(), // Ensure this matches the date format in your database
    });

    if (!existingBilling) {
        await BillingHistory.create({
            user: userSubscription.user,
            stripeSubscriptionId: subscription.id,
            priceId: subscription.items.data[0].price.id,
            planName: product.name,
            status: subscription.status,
            amount: subscription.items.data[0].price.unit_amount / 100, // Stripe amounts are in cents
            cardBrand: paymentMethod.card.brand,
            cardLast4: paymentMethod.card.last4,
            date: new Date(),
        });
    }
}

async function handleChargeUpdated(charge) {
    const invoice = await stripe.invoices.retrieve(charge.invoice);
    const subscription = await stripe.subscriptions.retrieve(invoice.subscription);
    const paymentMethod = await stripe.paymentMethods.retrieve(subscription.default_payment_method);

    const userSubscription = await UserSubscription.findOne({
        stripeSubscriptionId: subscription.id,
    });

    if (!userSubscription) {
        return new NextResponse("User subscription not found", { status: 404 });
    }

    // Check if billing history entry already exists
    const existingBilling = await BillingHistory.findOne({
        user: userSubscription.user,
        stripeSubscriptionId: subscription.id,
        priceId: subscription.items.data[0].price.id,
        date: new Date().toDateString(), // Ensure this matches the date format in your database
    });

    if (!existingBilling) {
        await BillingHistory.create({
            user: userSubscription.user,
            stripeSubscriptionId: subscription.id,
            priceId: subscription.items.data[0].price.id,
            planName: invoice.lines.data[0].plan.nickname,
            status: charge.status,
            amount: charge.amount / 100, // Stripe amounts are in cents
            cardBrand: paymentMethod.card.brand,
            cardLast4: paymentMethod.card.last4,
            date: new Date(),
        });
    }
}
