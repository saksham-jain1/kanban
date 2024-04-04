const mongoose = require("mongoose");

const columnSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
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

const Column = mongoose.model("Column", columnSchema);

module.exports = Column;
