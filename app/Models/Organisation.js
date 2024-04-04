const mongoose = require("mongoose");

const organisationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
    users: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        access: { type: String, enum: ["View", "Edit"], required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Organisation = mongoose.model("Organisation", organisationSchema);

module.exports = Organisation;
