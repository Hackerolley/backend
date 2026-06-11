import {Router} from "express"
import { registerUser, loginUser } from "../controller/user.controller.js";
export const userrouter = Router()

//register a user
userrouter.post("/register", registerUser)

//login a user
userrouter.post("/login", loginUser)