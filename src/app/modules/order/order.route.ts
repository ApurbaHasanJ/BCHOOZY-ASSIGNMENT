import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

// post order
router.post('/', OrderControllers.handleCreateOrder);

// get order
router.get('/', OrderControllers.handleGetAllOrders);

export const OrderRoutes = router;
