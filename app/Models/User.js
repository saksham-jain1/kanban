const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: true },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already in exists."],
      index: true,
    },
    password: { type: String, required: true },
    activePlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
    },
    planStartDate: { type: Date, required: true },
    otp: { type: String },
    otpTime: { type: Date },
    otpSendTime: { type: Date },
    otpAttempt: { type: Number, default: 0 },
    loginTime: { type: Date },
    loginAttempt: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.matchOTP = async function (otp) {
  return await bcrypt.compare(otp, this.otp);
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  if (this.isModified("otp")) {
    const salt = await bcrypt.genSalt(10);
    this.otp = await bcrypt.hash(this.otp, salt);
  }
  return next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
