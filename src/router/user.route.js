import {Router} from "express"
import { registerUser, loginUser, logoutUser } from "../controller/user.controller.js";
import { authenticateToken } from "../middleware/authmiddleware.js";
export const userrouter = Router()

//register a user
userrouter.post("/register", registerUser)

//login a user
userrouter.post("/login", loginUser)

//logout a user
userrouter.post("/logout", authenticateToken, logoutUser)