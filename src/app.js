import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

//some configurtions
app.use(express.json({limit: "16kb"})) //Handles incoming JSON data.
app.use(express.urlencoded({extended: true, limit: "16kb"})) //Handles form submissions.
app.use(express.static("public"))  //to save some files or images on our own server.
app.use(cookieParser())  //to access and use cookies of user browser from server. 

export default app 