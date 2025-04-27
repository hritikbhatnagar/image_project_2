import mongoose from "mongoose";

const imageSchema=new mongoose.Schema({
    url:{
        type:String,
        trim:true,
        required:true
    }
});

const Image=mongoose.model('Image',imageSchema);

export default Image;