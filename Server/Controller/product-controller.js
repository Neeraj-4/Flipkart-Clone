import Product from "../model/product-schema.js";
export const productList = async(request,response)=>{
    try {
        const getProduct=await Product.find();
        response.status(200).json(getProduct);
    } catch (error) {
        response.status(500).json({message:error.message});
        
    }

}