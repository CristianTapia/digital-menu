import { table } from "../models/Table.js";

const getTable = async (req, res) => {
  try {
    const tables = await table.findAll();
    res.json(tables);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createTable = async (req, res) => {
  try {
    const { number } = req.body;
    const newTable = await table.create({
      number,
    });
    console.log(newTable);
    res.json(newTable);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateTable = async (req, res) => {
  try {
    // const { id } = req.params;
    const { number } = req.body;
    const tables = await table.findByPk(1);
    tables.number = number;
    await tables.save();
    res.json(tables);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteTable = async (req, res) => {
  try {
    const { id } = req.params;
    await table.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500), json({ message: error.message });
  }
};

export { getTable, createTable, updateTable, deleteTable };