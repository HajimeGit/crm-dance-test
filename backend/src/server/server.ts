import express from 'express';
import orderRouter from '../routes/order.router';
import { connectDB } from '../db/connection';

const app = express();

// Connect the MongoDB instance.
connectDB();

app.use(express.json());
app.use('/orders', orderRouter);

export default app;
