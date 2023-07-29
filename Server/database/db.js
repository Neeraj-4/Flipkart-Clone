import mongoose from "mongoose";
export const Connection = async(USERNAME,PASSWORD)=>
{
  const URL =`mongodb+srv://${USERNAME}:${PASSWORD}@testproject0.0iy5grq.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser: true});
        console.log('database connect sucessfully');

    } catch (error) {
        console.log('error found during connection with database',error.message);
                   
    }




}
export default Connection;