import { NextFunction, Request, Response } from "express";
import { ValidationChain, body, validationResult } from "express-validator";

const validator = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) await validation.run(req);
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).send({ message: "ERROR", cause: errors.array() });
    next();
  };
};

export const signinValidator = [
  body("email").notEmpty().trim().isEmail().withMessage("Email is required"),
  body("password")
    .notEmpty()
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password should contain atleast 6 characters"),
];

export const signupValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  ...signinValidator,
];

export default validator;
