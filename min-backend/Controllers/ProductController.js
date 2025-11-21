import ProductModel from "../Models/ProductModel.js";
export const all=async(req,res)=>{
    const data=await ProductModel.find();
    // res.send("all product");
    res.json(data);
};