/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

// create product service
const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

// get all products
const getAllProducts = async (searchTerm?: string) => {
  const query: any = {};
  if (searchTerm) {
    query.$or = [{ name: { $regex: searchTerm, $options: 'i' } }];
  }
  const result = await ProductModel.find(query);
  return result;
};

// get single product by id
const getProductById = async (_id: string) => {
  const result = await ProductModel.aggregate([{ $match: { _id } }]);
  return result;
};

// get single product by id
const updateProductById = async (id: string, product: TProduct) => {
  const result = await ProductModel.findOneAndUpdate({ _id: id }, product, {
    new: true,
  });
  return result;
};

// delete product by id
const deleteProductById = async (_id: string) => {
  const result = await ProductModel.updateOne({ _id }, { isDeleted: true });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
