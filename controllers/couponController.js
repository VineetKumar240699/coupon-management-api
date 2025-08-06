// controllers/couponController.js

exports.createCoupon = (req, res) => {
  res.send("Coupon created successfully");
};

exports.getAllCoupons = (req, res) => {
  res.send("All coupons retrieved");
};

exports.getCouponById = (req, res) => {
  res.send(`Coupon details for ID ${req.params.id}`);
};

exports.updateCoupon = (req, res) => {
  res.send(`Coupon ${req.params.id} updated`);
};

exports.deleteCoupon = (req, res) => {
  res.send(`Coupon ${req.params.id} deleted`);
};

exports.applyCoupon = (req, res) => {
  res.send(`Coupon ${req.params.id} applied`);
};
