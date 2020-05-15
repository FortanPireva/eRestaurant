const express = require("express");
const userRouter = express.Router();
const UserController = require("../controllers/UserController");
userRouter.post("/login", UserController.postLogin);
userRouter.post("/signup", UserController.postSignUp);

module.exports = userRouter;
