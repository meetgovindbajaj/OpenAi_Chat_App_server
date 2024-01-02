import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/user/signin", { email, password });
  const data = await res.data;
  if (res.status !== 200) throw new Error(data.cause);
  return data;
};

export const signupUser = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await axios.post("/user/signup", { name, email, password });
  const data = await res.data;
  if (res.status !== 200) throw new Error(data.cause);
  return data;
};

export const checkAuthToken = async () => {
  const res = await axios.get("/user/signin");
  if (res.status !== 200) throw new Error("Automatic login failed");
  const data = await res.data;
  return data;
};
