import { Request, Response } from "express";
import User from "../models/userModel.js";
import { ERROR_404, ERROR_500 } from "../utils/constants.js";
import Chat from "../models/chatModel.js";
import { configureOpenAi } from "../config/openaiConfig.js";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const getAllChats = async (req: Request, res: Response) => {
  try {
    const { id } = res.locals.jwtData;
    let user = await User.findById(id).populate("chats", "_id content role");
    if (!user)
      return res.status(404).json({ message: "ERROR", cause: ERROR_404 });
    return res.status(200).json({ message: "OK", data: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const generateChatCompletion = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const { id } = res.locals.jwtData;
    let user = await User.findById(id);
    if (!user)
      return res.status(404).json({ message: "ERROR", cause: ERROR_404 });

    // creating new chat

    // configuring and getting response of chat from openai model
    // const config = configureOpenAi();
    // const openAi = new OpenAI(config);
    // const chatResponse = await openAi.chat.completions.create({
    //   model: "gpt-4-1106-preview",
    //   messages: allChats,
    // });
    // creating new chat of response
    const chat = new Chat({ content: message, role: "user" });
    const newChat = new Chat({
      content: "hi this is ai assistant",
      role: "assistant",
    });
    const [userData, userMessage, aiResponse] = await Promise.all([
      User.findByIdAndUpdate(
        id,
        {
          $addToSet: {
            chats: [chat._id, newChat._id],
          },
        },
        { new: true }
      ).populate("chats", "_id content role"),
      chat.save(),
      newChat.save(),
    ]);
    return res.status(200).json({ message: "OK", data: userData.chats });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const chatController = { getAllChats, generateChatCompletion };
export default chatController;
