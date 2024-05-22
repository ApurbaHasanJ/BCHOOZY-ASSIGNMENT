/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, isValidObjectId, model } from 'mongoose';
import { TOrder } from './order.interface';
import { ProductModel } from '../product/product.model';

const orderSchema = new Schema<TOrder>({
  email: { type: String, required: [true, 'Email is required'] },
  productId: { type: String, required: [true, 'Product Id is required'] },
  price: { type: Number, required: [true, 'Price is required'] },
  quantity: { type: Number, required: [true, 'Quantity is required'] },
});

// Pre-save middleware to manage inventory
orderSchema.pre('save', async function (next) {
  const order = this as TOrder;
  
  // Validate ObjectId format
  if (!isValidObjectId(order.productId)) {
    const error = new Error(`Invalid product ID format: ${order.productId}`);
    error.name = 'InvalidObjectId';
    return next(error);
  }

  try {
    const product = await ProductModel.findById(order.productId);

    if (!product) {
      const error = new Error(`Product with ID ${order.productId} not found`);
      error.message = 'ProductNotFound';
      throw error;
    }

    if (order.quantity > product.inventory.quantity) {
      const error = new Error(
        `Insufficient quantity available for product ${product.name}`,
      );
      error.name = 'InsufficientQuantity';
      throw error;
    }

    product.inventory.quantity -= order.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    await product.save();
    next();
  } catch (error: any) {
    next(error);
  }
});

export const OrderModel = model<TOrder>('Order', orderSchema);
