const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    time: { type: Date },
    dueTo: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "dueToModel",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    dueToModel: { type: String, enum: ["Card", "Column", "Board"] },
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
