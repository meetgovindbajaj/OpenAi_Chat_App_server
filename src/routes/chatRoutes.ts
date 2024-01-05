import { Router } from "express";
import { verifyToken } from "../utils/tokenManager.js";
import chatController from "../controllers/chatController.js";
import validator, { chatCompletionValidator } from "../utils/validators.js";

const chatRoutes: Router = Router();

// protected api
chatRoutes
  .route("/")
  .get(verifyToken, chatController.getAllChats)
  .delete(verifyToken, chatController.deleteChats);
chatRoutes.post(
  "/new",
  validator(chatCompletionValidator),
  verifyToken,
  chatController.generateChatCompletion
);

export default chatRoutes;
