import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// default route
app.get('/', (req: Request, res: Response) => {
    // Constructing server status object
    const serverStatus = {
      status: 'running',
      message: 'BCHOOZY API is operational and running smoothly.',
      timestamp: new Date().toISOString(),
      version: 'v1.0.1',
      uptime: process.uptime(),
      author: 'Apurba Hasan J',
      contact: {
        email: 'apurbahasanj@gmail.com',
        website: 'https://apurbahasanj.netlify.app/',
      },
    };
    res.json(serverStatus);
  });

// application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

export default app;