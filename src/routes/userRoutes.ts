import { Router } from "express";
import userController from "../controllers/userController.js";
import validator, {
  signinValidator,
  signupValidator,
} from "../utils/validators.js";

const userRoutes: Router = Router();

userRoutes.get("/", userController.getAllRoutes);
userRoutes.post("/signup", validator(signupValidator), userController.signup);
userRoutes.post("/signin", validator(signinValidator), userController.signin);

export default userRoutes;
