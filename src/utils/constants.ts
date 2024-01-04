export const COOKIE_NAME: string = "auth_token";
export const COOKIE_OPTIONS: {
  path: string;
  domain: string;
  httpOnly: boolean;
  signed: boolean;
} = {
  path: "/",
  domain: "localhost",
  httpOnly: true,
  signed: true,
};
export const ERROR_401: string = "Unauthorized access";
export const ERROR_403: string = "Invalid credentials";
export const ERROR_404: string = "User not found or token expired";
export const ERROR_500: string = "Internal server error";
