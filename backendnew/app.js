import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import dotenv from "dotenv";
import messageRouter from './router/messageRouter.js';
import cors from 'cors';
    
const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    Credentials: true
}));



//Middle wheres
app.use(express.json());//To parse a string the received data
app.use(express.urlencoded({ extended: true }));//it checks the database inputs to keep it in a string fromat(It checks the data)

app.use("/api/v1/message", messageRouter)

dbConnection();


export default app;