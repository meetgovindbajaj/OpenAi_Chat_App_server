import User from "../models/userModel.js";
import { compare, hash } from "bcrypt";
import { createToken } from "../utils/tokenManager.js";
import { COOKIE_NAME, COOKIE_OPTIONS, ERROR_401, ERROR_403, ERROR_404, ERROR_500, } from "../utils/constants.js";
// sends data of all the user to client
const getAllRoutes = async (req, res) => {
    try {
        const users = await User.find({}, { _id: 1, name: 1, email: 1 });
        return res.status(200).json({ message: "OK", data: users });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", cause: ERROR_500 });
    }
};
// handles the signup requests of the new user
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // checking that if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(403).json({ message: "ERROR", cause: ERROR_403 });
        // encrypting the password of user
        const encPassword = await hash(password, 10);
        // registering new user
        const user = new User({ name, email, password: encPassword });
        await user.save();
        // clearing previously stored cookies
        res.clearCookie(COOKIE_NAME, COOKIE_OPTIONS);
        // creating json web token (expires in 7 days by default)
        const token = createToken(user._id.toString(), user.email);
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        // sending cookies to client
        // res.cookie(COOKIE_NAME, token, {
        //   expires,
        //   ...COOKIE_OPTIONS,
        // });
        return res.status(201).json({
            message: "OK",
            name: user.name,
            email: user.email,
            token,
            Cookie_Name: "auth_token",
            expires,
        });
    }
    catch (error) {
        console.log(error.message);
        return res.status(404).json({ message: "ERROR", cause: ERROR_500 });
    }
};
// handles the signin requests of the existing User
const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // checking that if email exists
        const user = await User.findOne({ email });
        if (!user)
            return res.status(404).json({ message: "ERROR", cause: ERROR_404 });
        // checking the password from database
        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid)
            return res.status(403).json({ message: "ERROR", cause: ERROR_403 });
        // clearing previously stored cookies
        res.clearCookie(COOKIE_NAME, COOKIE_OPTIONS);
        // creating json web token (expires in 7 days by default)
        const token = createToken(user._id.toString(), user.email);
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        // sending cookies to client
        // res.cookie(COOKIE_NAME, token, {
        //   expires,
        //   ...COOKIE_OPTIONS,
        // });
        return res.status(200).json({
            message: "OK",
            name: user.name,
            email: user.email,
            token,
            Cookie_Name: "auth_token",
            expires,
        });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "ERROR", cause: ERROR_500 });
    }
};
const authStatus = async (req, res) => {
    try {
        // extracting id from local variables
        const { id } = res.locals.jwtData;
        // finding user by id
        const user = await User.findById(id);
        if (!user)
            return res.status(404).json({ message: "ERROR", cause: ERROR_404 });
        if (id !== user._id.toString())
            return res.status(401).json({ message: "ERROR", cause: ERROR_401 });
        return res
            .status(200)
            .json({ message: "OK", name: user.name, email: user.email });
    }
    catch (error) {
        console.log(error.message);
        return res.status(404).json({ message: "ERROR", cause: ERROR_500 });
    }
};
const logout = async (req, res) => {
    res.clearCookie(COOKIE_NAME, COOKIE_OPTIONS);
    return res.status(200).json({ message: "OK" });
};
const userController = { getAllRoutes, signup, signin, authStatus, logout };
export default userController;
//# sourceMappingURL=userController.js.map