import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

// port order
router.post('/', OrderControllers.handleCreateOrder);

export const OrderRoutes = router;
