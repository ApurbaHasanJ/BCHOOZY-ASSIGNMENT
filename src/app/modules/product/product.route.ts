import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// post product
router.post('/', ProductControllers.handlePostProduct);

// get all products
router.get('/', ProductControllers.handleGetAllProducts);

// get single product
router.get('/:productId', ProductControllers.handleGetProductById);

// get single product
router.patch('/:productId', ProductControllers.handleGetProductById);

export const ProductRoutes = router;
