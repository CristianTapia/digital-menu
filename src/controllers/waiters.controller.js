import { waiter } from "../models/Waiter.js";

const getWaiter = async (req, res) => {
  try {
    const waiters = await waiter.findAll();
    res.json(waiters);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createWaiter = async (req, res) => {
  try {
    const { name, lastName } = req.body;
    const newWaiter = await waiter.create({
      name,
      lastName,
    });
    console.log(newWaiter);
    res.json(newWaiter);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { getWaiter, createWaiter };
