const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    billings: [
      {
        planStartDate: { type: Date, required: true },
        plan: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Plan",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Billing = mongoose.model("Billing", billingSchema);

module.exports = Billing;
