import { connect, disconnect } from "mongoose";

const connectDb = async () => {
  try {
    await connect(process.env.MONGODB_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
    throw new Error("Database connection failed");
  }
};

export const disconnectDb = async () => {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Database disconnection failed");
  }
};

export default connectDb;
