const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bg: {
      type: String,
      default: 'url("https://source.unsplash.com/1200x900/?office")',
    },
    users: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          index: true,
        },
        access: { type: String, enum: ["View", "Edit"], required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;
