import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// post product
router.post('/', ProductControllers.handlePostProduct);

// get all products
router.get('/', ProductControllers.handleGetAllProducts);

// get single product
router.get('/:productId', ProductControllers.handleGetProductById);

// update product by id
router.put('/:productId', ProductControllers.handleUpdateProductById);

// delete product by id
router.delete('/:productId', ProductControllers.handleDeleteProduct);

export const ProductRoutes = router;
