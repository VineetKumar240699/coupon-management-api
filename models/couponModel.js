const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["cart-wise", "product-wise", "bxgy"],
      required: true,
    },
    details: { type: mongoose.Mixed, required: true },
    active: { type: Boolean, default: true },
    expiresAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", CouponSchema);
