import { CreateOrderDto } from '../dto/order.dto';
import { Order } from '../models/order';
import { Request, Response } from 'express';

export const createOrder = async (req: Request, res: Response) => {
  const orderData: CreateOrderDto = req.body;

  try {
    const order = await Order.create({
      ...orderData,
    });

    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
