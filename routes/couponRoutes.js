const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/couponController");

router.post("/coupons", ctrl.createCoupon); // Make sure this function exists
router.get("/coupons", ctrl.getAllCoupons);
router.get("/coupons/:id", ctrl.getCouponById);
router.put("/coupons/:id", ctrl.updateCoupon);
router.delete("/coupons/:id", ctrl.deleteCoupon);
router.post("/apply-coupon/:id", ctrl.applyCoupon);

module.exports = router;
