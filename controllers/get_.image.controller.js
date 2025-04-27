import Image from "../models/Image.model.js";
import User from "../models/User.model.js";
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv'
dotenv.config({path:".././.env"});

import jwt from 'jsonwebtoken';


const RegisterUser=async(req,res)=>{
let {name,email,password}=req.body;
if(!name || !email || !password)
    return res.send("all fileds are required...");

else{
    try {
        let user=await User.findOne({email});
        if(user)
            return res.send("user is already exists..");  
        else{
        let hash_password=await bcrypt.hash(password,10);
            const u=await User.create({name,email,password:hash_password});

            return res.send("user is registered successfully...")
        }   
    } catch (error) {
        
    }
    
}

}

const loginUser=async(req,res)=>{
let {email,password}=req.body;
console.log(req.body)
if(!email || !password)
return res.send("all fields are required for login..");
else{
    try {
        let user=await User.findOne({email});
if(!user)
{
    res.send("invalid credentials...");
}
else{
    console.log(password)
    let t=await bcrypt.compare(password,user.password)
//create a token and store into cookies4
if(t)
    res.send("login sucessfully.");
let token=jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:'24h'});
res.cookie("token",token,{
    httpOnly: true,
    secure: false,      // or true if using https
    sameSite: 'lax',
    path: '/',           // default is '/'
  });
 // redirect

{
    res.send("invalid credentials..")
}
}

    } catch (error) {
       console.log("error during login.. "+error); 
    }


}
}



const getImage=async (req,res)=>{
    const data=await Image.find();
    res.send(data);


}

const logoutUser=async(req,res)=>{
    res.clearCookie('token', {
        path: '/',          // match path
        httpOnly: true,     // match httpOnly
        secure: false,      // match secure (false for localhost)
        sameSite: 'lax',    // match sameSite
      });
    
    
    res.send("logout successfully...")
}
export {RegisterUser,loginUser,getImage,logoutUser};