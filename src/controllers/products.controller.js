import { product } from "../models/Product.js";
import { category } from "../models/Category.js";

const getProduct = async (req, res) => {
  try {
    const products = await product.findAll({
      order: [['name', 'ASC']]
    });
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, image, procedence, description, categoryId } =
      req.body;
    const newProduct = await product.create({
      name,
      price,
      image,
      procedence,
      description,
      categoryId,
    });
    console.log(newProduct);
    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await product.destroy({
      where: {
        id,
      },
    });
    res.status(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const joinProductsCategories = async (req, res) => {
  try {
    const data = await product.findAll({
      include: [
        {
          model: category,
          as: "category",
        },
      ],
    });
    console.log(data);
    res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { getProduct, createProduct, deleteProduct, joinProductsCategories };
