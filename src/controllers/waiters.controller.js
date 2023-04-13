import { waiter } from "../models/Waiter.js";

const getWaiter = (req, res) => {
    res.send('Getting')
}

const createWaiter = async (req, res) => {
    // console.log(req.body)
    res.send('Successfully posted')
    const {name, lastName} = req.body;
    const newWaiter = await waiter.create({
        name,
        lastName
    })

    console.log(newWaiter)
}

export { getWaiter, createWaiter };