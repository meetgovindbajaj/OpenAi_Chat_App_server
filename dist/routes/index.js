import { Router } from "express";
import userRoutes from "./userRoutes.js";
import chatRoutes from "./chatRoutes.js";
const route = Router();
route.use("/user", userRoutes); // url: domain/api/v1/user/*
route.use("/chats", chatRoutes); // url: domain/api/v1/chats/*
export default route;
//# sourceMappingURL=index.js.map