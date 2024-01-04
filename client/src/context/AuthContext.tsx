import { ReactNode, createContext, useLayoutEffect, useState } from "react";
import {
  checkAuthToken,
  getMessages,
  loginUser,
  sendMessage,
  signupUser,
} from "../utils/apiCommunicator";
import toast from "react-hot-toast";

interface User {
  name: string;
  email: string;
}

interface UserAuth {
  isLoggedIn: boolean;
  user: User | null;
  isLoading: boolean;
  chatMessages: [{ id?: string; role: string; content: string }] | [];
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getChats: () => Promise<void>;
  sendChat: (message: string) => Promise<void>;
}

export const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<
    [{ _id: string; role: string; content: string }] | []
  >([]);

  useLayoutEffect(() => {
    (async function checkLoginStatus() {
      setIsLoading(true);
      try {
        toast.loading("Loging In", { id: "autosignin" });
        const data = await checkAuthToken();
        if (data) {
          setUser({ email: data.email, name: data.name });
          setIsLoggedIn(true);
          toast.success("Logged In Successfully", { id: "autosignin" });
          getChats();
        } else {
          toast.error("Loging In Failed", {
            id: "autosignin",
          });
        }
      } catch (error) {
        toast.error("Loging In Failed", {
          id: "autosignin",
        });
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const login = async (email: string, password: string) => {
    const data = await loginUser(email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
  };
  const signup = async (name: string, email: string, password: string) => {
    const data = await signupUser(name, email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
  };
  const logout = async () => {};

  const getChats = async () => {
    const data = await getMessages();
    if (data) setChatMessages(data.data);
  };
  const sendChat = async (message: string) => {
    toast.loading("Sending message...", { id: "sendChat" });
    const data = await sendMessage(message);
    if (data) {
      toast.success("Message sent", { id: "sendChat" });
      setChatMessages(data.data);
    } else {
      toast.error("Something went wrong", { id: "sendChat" });
    }
  };
  const value = {
    user,
    isLoggedIn,
    isLoading,
    chatMessages,
    login,
    signup,
    logout,
    getChats,
    sendChat,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
