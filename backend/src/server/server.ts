import express from 'express';
import orderRouter from '../routes/order.router';
import recordingRouter from '../routes/recording.router';
import { connectDB } from '../db/connection';
import cors from 'cors';
import { corsOptions } from '../config/cors';

const app = express();

// Connect the MongoDB instance.
connectDB();

// Middleware utilities.
app.use(express.json({ limit: process.env.REQUEST_LIMIT }));
app.use(cors(corsOptions));

// Routes.
app.use('/order', orderRouter);
app.use('/recording', recordingRouter);

export default app;
