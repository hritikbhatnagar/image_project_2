import express from 'express';
import dotenv from 'dotenv';
import connect_db from './db/db_connect.js';
import router from './routes/get_image.route.js';
import cors from 'cors';
dotenv.config({path:"./.env"});
const PORT=process.env.PORT || 8080;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
connect_db();
app.use(cors({origin:["http://127.0.0.1:3000",'https://image-project-1-spse.vercel.app'],credentials:true}));
app.use("/api/v1/user",router);


app.listen(PORT,()=>
{
    console.log(`server is running at ${PORT}`);
});
