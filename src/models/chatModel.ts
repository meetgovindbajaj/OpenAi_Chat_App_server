import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  role: {
    type: String,
    required: [true, "Role is required!"],
  },
  content: {
    type: String,
    required: [true, "Content is required!"],
  },
});

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
