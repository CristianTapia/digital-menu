import { waiter } from "../models/Waiter.js";

const getWaiter = async (req, res) => {
  const waiters = await waiter.findAll();
  res.json(waiters);
};

const createWaiter = async (req, res) => {
  const { name, lastName } = req.body;
  const newWaiter = await waiter.create({
    name,
    lastName,
  });

  console.log(newWaiter);
  res.json(newWaiter);
};

export { getWaiter, createWaiter };