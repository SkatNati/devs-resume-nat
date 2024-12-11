const mongoose = require("mongoose");

const billingHistorySchema = new mongoose.Schema(
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
        priceId: {
            type: String,
            required: true,
        },
        planName: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
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
        date: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

const BillingHistory = mongoose.models.BillingHistory || mongoose.model("BillingHistory", billingHistorySchema);

module.exports = BillingHistory;
