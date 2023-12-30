import { Router } from "express";
import userController from "../controllers/userController.js";
const userRoutes = Router();
userRoutes.get("/", userController.getAllRoutes);
export default userRoutes;
//# sourceMappingURL=userRoutes.js.map