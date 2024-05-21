/* eslint-disable @typescript-eslint/no-explicit-any */
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

// create order service
const createOrderIntoDB = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

// get all orders
const getAllOrders = async (email?: string) => {
  const query: any = {};

  if (email) {
    query.$or = [{ email: { $regex: email, $options: 'i' } }];
  }
  const result = await OrderModel.find(query);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrders,
};
