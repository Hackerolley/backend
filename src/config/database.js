import mongoose from 'mongoose';
import dotenv from 'dotenv';

//configure data base connection with mogo Db

const connectDB = async () => { 
    try {
        //check the validity of the mongo uri and also trim the white space 
        const mongoUri = process.env.MONGO_URI

        await mongoose.connect(mongoUri)
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDB ;