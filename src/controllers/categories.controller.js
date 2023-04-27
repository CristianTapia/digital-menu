import { category } from "../models/Category.js";
import { product } from "../models/Product.js";

const getAllCategories = async (req, res) => {
  try {
    const categories = await category.findAll({
      order: [['name', 'ASC']]
    });
    res.json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const categSelected = await category.findOne({
      where: {
        id,
      },
    });

    if (!categSelected) {
      return res.status(404).json({ message: error.message });
    }
    res.json(categSelected);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await category.create({
      name,
    });
    console.log(newCategory);
    res.json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const categName = await category.findByPk(id);
    categName.name = name;
    await categName.save();
    res.json(categName);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await category.destroy({
      where: {
        id,
      },
    });
    res.status(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getCategoryProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await product.findAll({
      where: { categoryId: id },
      order: [['name', 'ASC']]
    });
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryProducts,
};