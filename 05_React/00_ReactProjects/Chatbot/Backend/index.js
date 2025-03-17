import express from 'express';
import dotenv from 'dotenv';
import connectDb from './database/db.js';
import cors from 'cors';

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
//import routes
import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
//using routes
app.use("/api/user",userRoutes);
app.use("/api/chat",chatRoutes);
app.listen(process.env.PORT,()=>{
    console.log(`Server is runnit on port  ${process.env.PORT}`);
connectDb();})