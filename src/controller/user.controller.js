import { User } from '../models/model.user.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// register a user
export const registerUser = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const user = await User.create({ 
            username, 
            email, 
            phone, 
            password 
        });
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(400).json({ message: error.message, error: "Failed to register user" });
    }
};

//login a user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" });

        res.status(200).json({ message: "User logged in successfully", user, token });
    } catch (error) {
        res.status(500).json({ message: error.message, error: "Failed to login user" });
    }
};
// logout a user
export const logoutUser = async (req, res) => {
    try{
        const { email } = req.body;

        //Check if email exist 
        const user = await User.findOne({ email })
        return res.status(200).json({
            message : "logged out",
            token : null
        })

        
    }catch (error){
        res.status(500).json({ message: error.message, error: "Failed to logout user" });
    }
}