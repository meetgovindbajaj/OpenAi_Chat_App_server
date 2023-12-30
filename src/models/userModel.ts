import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
  },
  email: {
    type: String,
    immutable: true,
    required: [true, "Email is required!"],
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  chats: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Chat",
    },
  ],
});

const User = mongoose.model("User", userSchema);
export default User;
