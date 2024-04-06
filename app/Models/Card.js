const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    dueDate: { type: Date },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    attachments: [{ type: String }],
    status: { type: String, enum: ["YetToStart", "InProgress", "Done"] },
    desc: { type: String },
    labels: [
      {
        text: { type: String, required: true },
        color: { type: String },
      },
    ],
    subTasks: [
      {
        text: { type: String, required: true },
        status: { type: String, enum: ["YetToStart", "InProgress", "Done"] },
      },
    ],
    comments: [
      {
        comment: { type: String },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    column: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Column",
      index: true,
    },
    customFields: { type: mongoose.Schema.Types.Mixed },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
