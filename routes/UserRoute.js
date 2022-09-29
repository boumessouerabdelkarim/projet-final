const express=require('express')

const UserRoute=express.Router()
const controllers = require("../controllers/user");
const userController=require("../controllers/user.controller");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");

const isAuth = require("../middleware/passport");
// auth
UserRoute.post("/register", registerRules(), validation, controllers.register);

//@method POST
//@desc POST A USER
// @PATH  http://localhost:5000/user/login
// @Params  Body
// register
// login
UserRoute.post("/login", loginRules(), validation, controllers.login);

//@method POST
//@desc GET A USER
// @PATH  http://localhost:5000/user/current
// @Params  Body
// get current user
UserRoute.get("/current", isAuth(), controllers.current);


// user DB
UserRoute.get("/", userController.getAllUsers);
UserRoute.get("/:id", userController.userInfo);
UserRoute.put("/update/:id", userController.updateUser);
UserRoute.delete("/delete/:id", userController.deleteUser);

module.exports=UserRoute 
