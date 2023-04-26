import pkg from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { user } from "../models/User.js";
import { promisify } from "util";
import Swal from 'sweetalert2';

const getUser = async (req, res) => {
  try {
    const users = await user.findAll();
    res.json(users);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const userRegister = async (req, res) => {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let noEncryptedPassword = req.body.password;
    let password = await bcrypt.hash(noEncryptedPassword, 8);
    let password2 = req.body.password2;
    if (!name || !email || !password) {
      res.render("/", {
        alert: true,
        alertTitle: "test",
        alertMessage: 'test',
        alertIcon: 'info',
        showConfirmButton: true,
        timer: false,
        ruta: ''
      });
    } else {
      const newUser = await user.create({
        name,
        email,
        password
      });
      
      console.log(newUser);
      // res.json(newUser);
      res.redirect('/');
    }
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const userLogin = async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: 'Something went wrong!',
      //   footer: '<a href="">Why do I have this issue?</a>'
      // })
    } else {

    }
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

export { getUser, userRegister, userLogin };