import { Box, Button, Typography } from "@mui/material";
import CustomInput from "../components/shared/CustomInput";
import { IoIosLogIn } from "react-icons/io";
import React, { useEffect } from "react";
import { useAuth } from "../utils/useAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const email = fd.get("email") as string;
    const password = fd.get("password") as string;
    try {
      toast.loading("Signing In", { id: "login" });
      await auth?.login(email, password);
      toast.success("Signed In Successfully", { id: "login" });
    } catch (error) {
      console.log(error);
      toast.error("Signing In Failed", { id: "login" });
    }
  };
  useEffect(() => {
    if (auth?.isLoggedIn) navigate("/");
  });

  return (
    <Box width={"100%"} height={"100%"} display={"flex"} flex={1}>
      <Box
        padding={5.5}
        mt={8}
        display={{ md: "flex", sm: "none", xs: "none" }}
      >
        <img src="airobot.png" alt="Robot" width={"400px"} />
      </Box>
      <Box
        display={"flex"}
        flex={{ md: 0.5, xs: 1 }}
        width={"auto"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        mx={"auto"}
        mt={16}
      >
        <form
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
          }}
          onSubmit={handleSubmit}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography
              variant="h4"
              textAlign={"center"}
              padding={2}
              fontWeight={600}
            >
              Login
            </Typography>
            <CustomInput type="email" name="email" label="Email" />
            <CustomInput type="password" name="password" label="Password" />
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                maxWidth: "400px",
                borderRadius: 2,
                bgcolor: "#00fffc",
                transition: "all .2s linear",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
              endIcon={<IoIosLogIn />}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
