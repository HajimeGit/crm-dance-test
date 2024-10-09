import { CreateOrderDto } from '../dto/order.dto';
import { Order } from '../models/order';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const createOrder = async (req: Request, res: Response) => {
  const orderData: CreateOrderDto = req.body;

  try {
    await Order.create({
      ...orderData,
      uuid: uuidv4(),
    });

    res.status(200).json({ status: 'Order has been created successfully.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
