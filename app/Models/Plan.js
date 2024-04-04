const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, min: 0, required: true },
    status: { type: String, required: true, enum: ["Active", "Closed"] },
  },
  {
    timestamps: true,
  }
);

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
