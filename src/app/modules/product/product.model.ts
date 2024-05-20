import { Schema, model, Types } from 'mongoose';
import { TInventory, TProduct, TVariant } from './product.interface';

const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<TProduct>({
  name: { type: String, required: [true, 'product name is required'] },
  description: {
    type: String,
    required: [true, 'product description is required'],
  },
  price: { type: Number, required: [true, 'product price is required'] },
  category: { type: String, required: [true, 'product category is required'] },
  tags: { type: [String], required: [true, 'Product tags are required'] },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

export const ProductModel = model<TProduct>('Product', productSchema);
