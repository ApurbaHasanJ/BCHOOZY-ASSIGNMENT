import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

// create product service
const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

// get all products
const getAllProducts = async () => {
  const result = await ProductModel.find();
  return result;
};


// get single product by id
const getProductById = async (id: string) => {
  const result = await ProductModel.findOne({_id: id})
  return result;
}

// get single product by id
const updateProductById = async (id: string) => {
  const result = await ProductModel.updateOne({_id: id})
  return result;
}


export const ProductServices = {
  createProductIntoDB,
  getAllProducts,
  getProductById,
  updateProductById
};
