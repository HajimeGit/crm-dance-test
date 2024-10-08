import { Document } from 'mongoose';

export interface IOrder extends Document {
  uuid: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address_line: string;
  city: string;
  region: string;
  postal_code: string;
  country: string;
  product_id: number;
}

export interface IRecording extends Document {}
