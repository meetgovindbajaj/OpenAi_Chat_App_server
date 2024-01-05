import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";

export const createToken = (
  id: string,
  email: string,
  expiresIn: string | number = "7d"
) => {
  const payload = { id, email };
  // siging new json web token
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
  return token;
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // getting signed json web token from cookies
  const token = req.signedCookies[`${COOKIE_NAME}`];
  if (!token || token.trim() === "")
    return res
      .status(401)
      .json({ message: "ERROR", cause: "Token not received" });
  return new Promise<void>((resolve, reject) => {
    // verifying that token is not invalid or expired
    return jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err: any, success: any) => {
        if (err) {
          reject(err.message);
          return res
            .status(401)
            .json({ message: "ERROR", cause: "Token Expired" });
        }
        resolve();
        // storing signed user info into local variables (id , email)
        res.locals.jwtData = success;
        return next();
      }
    );
  });
};
