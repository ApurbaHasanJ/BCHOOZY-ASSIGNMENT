
import { z } from 'zod';

const OrderValidationSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  productId: z.string().nonempty({ message: 'Product Id is required' }),
  price: z.number().min(0, { message: 'Price must be a non-negative number' }),
  quantity: z.number().int().min(1, { message: 'Quantity must be at least 1' }),
});

export default OrderValidationSchema;
