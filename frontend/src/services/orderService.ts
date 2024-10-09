import { IOrder } from '../types/order.type';
import { api } from './api';

export const orderService = api.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation<void, IOrder>({
      query: (order) => ({
        url: '/order/create',
        method: 'POST',
        body: order,
      }),
    }),
  }),
});

export const { usePlaceOrderMutation } = orderService;
