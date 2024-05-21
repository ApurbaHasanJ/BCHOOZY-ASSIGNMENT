import { Schema, model } from 'mongoose';
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
  const product = await ProductModel.findById(order.productId);

  if (!product) {
    throw new Error(`Product with ID ${order.productId} not found`);
  }

  if (order.quantity > product.inventory.quantity) {
    throw new Error(
      `Insufficient quantity available for product ${product.name}`,
    );
  }

  product.inventory.quantity -= order.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();
  next();
});

export const OrderModel = model<TOrder>('Order', orderSchema);
