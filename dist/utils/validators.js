import { body, validationResult } from "express-validator";
const validator = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations)
            await validation.run(req);
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
export const chatCompletionValidator = [
    body("message").notEmpty().withMessage("Message is required"),
];
export default validator;
//# sourceMappingURL=validators.js.map