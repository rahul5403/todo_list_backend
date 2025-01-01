import express from "express";
import { signUp,login, logout } from "../controller/auth_controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const route = express.Router();

route.post("/signup", signUp)
route.post("/login", login)
route.post("/logout", protectRoute, logout)


export default route;