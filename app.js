const express = require("express");
const app = express();
const couponRoutes = require("./routes/couponRoutes");

app.use(express.json());
app.use("/api", couponRoutes);

module.exports = app;
