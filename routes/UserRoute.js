const express = require("express");
const userRoute = express.Router();
const { regitser,login } = require("../Controllers/userController");

userRoute.post("/register", regitser);
userRoute.post("/login", login);

module.exports = userRoute;
