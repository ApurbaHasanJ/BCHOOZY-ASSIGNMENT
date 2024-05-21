import { z } from 'zod';

// Zod schema for TVariant
const VariantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Zod schema for TInventory
const InventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

// Zod schema for TProduct
const ProductValidationSchema = z.object({
  name: z.string().nonempty('Product name is required'),
  description: z.string().nonempty('Product description is required'),
  price: z.number().min(0, 'Product price must be a positive number'),
  category: z.string().nonempty('Product category is required'),
  tags: z.array(z.string()).nonempty('Product tags are required'),
  variants: z
    .array(VariantValidationSchema)
    .nonempty('At least one variant is required'),
  inventory: InventoryValidationSchema,
});

export default ProductValidationSchema;
