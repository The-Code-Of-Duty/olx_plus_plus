require("dotenv").config();

import { Request, Response } from "express";
import express from "express";
import home from "./routes/home";
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import cors from "cors";

const app=express();
const PORT = process.env.PORT || 8080;

app.get("/",(req:Request,res:Response)=>{
    res.send("Hello World");
});

app.use("/home",home);

app.listen(PORT, ()=>{
     console.log(`Server running on port: ${PORT}`);
})