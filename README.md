# Coupon Management API

This project is a backend service for applying and managing discount coupons in an e-commerce application. It was built as a part of the Monk Commerce backend task using **Node.js**, **Express**, and **MongoDB** (MERN Stack).

---

##  Features

-  Create, update, delete discount coupons
-  Supports multiple types:
  - Cart-wise (e.g., 10% off on cart value > ₹500)
  - Product-wise (e.g., 15% off on a specific product)
  - BxGy (Buy X Get Y free)
-  Apply coupon logic on cart items
-  Validations: expiry date, active status, repetition limits

---

##  Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Tools:** Postman (for API testing)

---

##  Folder Structure

coupon-management-api/
├── controllers/
│ └── couponController.js
├── models/
│ └── couponModel.js
├── routes/
│ └── couponRoutes.js
├── app.js
└── server.js

| Method | Path                   | Description                    |
| ------ | ---------------------- | ------------------------------ |
| POST   | /api/coupons           | Create a new coupon            |
| GET    | /api/coupons           | Get all coupons                |
| GET    | /api/coupons/\:id      | Get a specific coupon          |
| PUT    | /api/coupons/\:id      | Update a coupon                |
| DELETE | /api/coupons/\:id      | Delete a coupon                |
| POST   | /api/apply-coupon/\:id | Apply a coupon to a given cart |

