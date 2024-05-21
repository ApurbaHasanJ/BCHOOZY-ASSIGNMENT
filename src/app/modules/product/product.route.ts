import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// post product
router.post('/create-product', ProductControllers.handlePostProduct);


export const ProductRoutes = router