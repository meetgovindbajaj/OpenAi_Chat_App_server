import { Router } from "express";
import userController from "../controllers/userController.js";

const userRoutes: Router = Router();

userRoutes.get("/", userController.getAllRoutes);

export default userRoutes;
