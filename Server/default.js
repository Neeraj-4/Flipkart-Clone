
import { products } from "./constant/data.js";
import Product from "./model/product-schema.js";
const DefaultData=async()=>
{
   try {

       await Product.insertMany(products);
       console.log('data import sucessfully');
   } catch (error) {
    console.log('erroe while instering data',error.message);
   }
}
export default DefaultData;