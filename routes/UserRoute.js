const express=require('express')
const User = require('../models/user');
const UserRoute=express.Router()
const authController = require("../controller/auth.controller");
const userController = require("../controller/user.controller");
// auth
UserRoute.post("/register", authController.signUp);
UserRoute.post("/login", authController.signIn);
UserRoute.get("/logout", authController.logout);

// user DB
UserRoute.get("/", userController.getAllUsers);
UserRoute.get("/:id", userController.userInfo);
UserRoute.put("/update/:id", userController.updateUser);
UserRoute.delete("/delete/:id", userController.deleteUser);


module.exports=UserRoute 
