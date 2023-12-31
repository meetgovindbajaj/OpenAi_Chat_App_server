import { NextFunction, Request, Response } from "express";
import User from "../models/userModel.js";
import { compare, hash } from "bcrypt";

// sends data of all the user to client
const getAllRoutes = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ message: "OK", data: users });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "ERROR", cause: error.message });
  }
};

// handles the signup requests of the new user
const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    // checking that if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(401)
        .json({ message: "ERROR", cause: "User already registered" });
    // encrypting the password of user
    const encPassword = await hash(password, 10);
    // registering new user
    const user = new User({ name, email, password: encPassword });
    await user.save();
    return res.status(201).json({ message: "OK", data: user._id.toString() });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: "ERROR", cause: error.message });
  }
};

// handles the signin requests of the existing User
const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    // checking that if email exists
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(401)
        .json({ message: "ERROR", cause: "User not registered" });
    // checking the password from database
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(403)
        .json({ message: "ERROR", cause: "Incorrect password" });
    }
    return res.status(200).json({ message: "OK", data: user._id.toString() });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: "ERROR", cause: error.message });
  }
};

const userController = { getAllRoutes, signup, signin };
export default userController;
