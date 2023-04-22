import { product } from "../models/Product.js";

const getProduct = async (req, res) => {
  try {
    const products = await product.findAll();
    res.json(products);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, image, procedence, description, categoryId } = req.body;
    const newProduct = await product.create({
      name,
      price,
      image,
      procedence,
      description,
      categoryId
    });
    console.log(newProduct);
    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

export { getProduct, createProduct };