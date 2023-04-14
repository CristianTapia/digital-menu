import { category } from "../models/Category.js";

const getCategory = async (req, res) => {
  try {
    const categories = await category.findAll();
    res.json(categories);
  } catch (error) {
    return res.status(500).json({message: error.message});
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
    return res.status(500).json({message: error.message});
  }
};

export { getCategory, createCategory };