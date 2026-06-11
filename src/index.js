
import connectDB from './config/database.js'
import app from './app.js'
import dotenv from 'dotenv';
dotenv.config();

//connect to the database
const startServer = async () => {
    await connectDB();
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}

startServer();