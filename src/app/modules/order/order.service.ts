import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

// create order service
const createOrderIntoDB = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
};
