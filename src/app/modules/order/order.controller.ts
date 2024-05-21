import { Request, Response } from 'express';
import OrderValidationSchema from './order.validation';
import { OrderServices } from './order.service';

// post order
const handleCreateOrder = async (req: Request, res: Response) => {
  try {
    const { order } = req.body;

    // validation for order
    const zodParsedData = OrderValidationSchema.parse(order);
    const result = await OrderServices.createOrderIntoDB(zodParsedData);

    // send the response back
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const OrderControllers = {
  handleCreateOrder,
};
