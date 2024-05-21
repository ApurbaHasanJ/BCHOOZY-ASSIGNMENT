import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import ProductValidationSchema from './product.validation';

// post a product
const handlePostProduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body;

    // validation for product
    const zodParsedData = ProductValidationSchema.parse(product);
    const result = await ProductServices.createProductIntoDB(zodParsedData);

    // send the response back
    res.status(200).json({
      success: true,
      message: 'product created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const ProductControllers = {
  handlePostProduct,
};
