const mongoose = require("mongoose");

const userSubscriptionSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        stripeSubscriptionId: {
            type: String,
            required: true,
        },
        stripeCustomerId: {
            type: String,
            required: true,
        },
        plan: {
            type: String,
            required: true,
        },

        stripeCurrentPeriodEnd: {
            type: Date,
            required: true,
        },

        cardBrand: {
            type: String,
            required: true,
        },
        cardLast4: {
            type: String,
            required: true,
        },
        stripePaymentMethodId: {
            type: String,
            required: true,
        },
        stripePriceId: {
            type: String,
            required: true,
        },
        planName: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const UserSubscription = mongoose.models.UserSubscription || mongoose.model("UserSubscription", userSubscriptionSchema);

module.exports = UserSubscription;
