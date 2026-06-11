import express from 'express';
import mongoose from 'mongoose';
import { userrouter } from './router/user.route.js';
import { productrouter } from './router/product.route.js';

const app = express();

//middleware to parse json data
app.use(express.json());

app.use("/api/users", userrouter);
app.use("/api/products", productrouter);
export default app;