// important imports
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import compression from "compression";
import connectDb from "./db/connection.js";
import route from "./routes/index.js";
import cors from "cors";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 5000;
// middlewares
app.use(cors({
    origin: "https://open-ai-chat-app-eight.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
})); //used to allow special domains to send requests to server
// app.use(
//   helmet({
//     contentSecurityPolicy: false,
//     crossOriginResourcePolicy: false,
//     crossOriginEmbedderPolicy: false,
//     referrerPolicy: { policy: "no-referrer" },
//   })
// );
app.use(morgan("dev")); //logs url requests
app.use(express.json()); //parses json data sent from client
app.use(cookieParser(process.env.COOKIE_SECRET)); //extracts cookies data from http request
app.use(express.urlencoded({ extended: true })); //extracts data from requests body
app.use(compression({ level: 6, threshold: 1000 })); //compresses size of responses
// routes
app.use("/api/v1/", route);
// server and database connection
console.log(PORT);
connectDb()
    .then(() => {
    app.listen(PORT, () => console.log("Server Running"));
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map