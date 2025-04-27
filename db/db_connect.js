import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({path:".././.env"})

const connect_db=async ()=>{
    mongoose.connect(process.env.DB_CONNECT_URL)
    .then(()=>{
        console.log("db is connected... ");
    })
    .catch((err)=>{
        console.log("error in db...");
    })
}

export default connect_db;
