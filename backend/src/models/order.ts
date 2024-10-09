import { model, Schema } from 'mongoose';
import { IOrder } from './types';

const orderSchema = new Schema<IOrder>(
  {
    uuid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, match: /\S+@\S+\.\S+/ },
    phone_number: { type: String, required: true },
    address_line: { type: String, required: true },
    city: { type: String, required: true },
    postal_code: { type: String, required: true },
    country: { type: String, required: true },
    product_id: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const Order = model<IOrder>('Order', orderSchema);
