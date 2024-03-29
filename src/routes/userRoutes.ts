import { Router } from "express";
import userController from "../controllers/userController.js";
import validator, {
  signinValidator,
  signupValidator,
} from "../utils/validators.js";
import { verifyToken } from "../utils/tokenManager.js";

const userRoutes: Router = Router();

userRoutes.get("/", userController.getAllRoutes);
userRoutes.post("/signup", validator(signupValidator), userController.signup);
userRoutes
  .route("/signin")
  .post(validator(signinValidator), userController.signin)
  .get(verifyToken, userController.authStatus);
userRoutes.get("/logout", verifyToken, userController.logout);

export default userRoutes;
