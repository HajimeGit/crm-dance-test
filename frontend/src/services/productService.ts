import { products } from '../constants/products';
import { IProduct } from '../types/product.type';

export const findProductById = (id: number): IProduct | undefined => {
  return products.find((product) => product.id === id);
};
