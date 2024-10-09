import { Document } from 'mongoose';

export interface IOrder extends Document {
  uuid: string;
  name: string;
  email: string;
  phone_number: string;
  address_line: string;
  city: string;
  postal_code: string;
  country: string;
  product_id: number;
}

export interface IRecording extends Document {
  uuid: string;
  events: any;
}
