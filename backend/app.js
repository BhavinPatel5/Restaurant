import express from "express";
import  cors  from "cors";
import  dotenv  from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import {errorMiddleware } from "./error/error.js"
import reservationRoute from "./route/reservationRoute.js"
import bodyParser from "body-parser";

const app = express();
dotenv.config({path: "./config/config.env" });

app.use(cors())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    method: ["POST"],
    Credentials: true,
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRoute)

dbConnection();

app.use(errorMiddleware)

export default app;
