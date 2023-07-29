import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        
    },
    mobile:{
     type:String,
     required:true,
     unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    }
    
});
const user = mongoose.model('user',userSchema);

export default user;