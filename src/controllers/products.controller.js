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

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, procedence, description } = req.body;
    const products = await product.findByPk(id);
    products.name = name;
    products.price = price;
    products.procedence = procedence;
    products.description = description;
    await products.save();
    res.json(products);
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
    console.log('Producto eliminado con éxito')
    res.status(204).send();
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

export { getProduct, createProduct, updateProduct, deleteProduct, joinProductsCategories };
