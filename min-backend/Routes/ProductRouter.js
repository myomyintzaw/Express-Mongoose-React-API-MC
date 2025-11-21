import express from "express";
import {all} from "../Controllers/ProductController.js";

const ProductRouter=express.Router();

// ProductRouter.get("/",(req,res)=>{
//     res.send("ok");
// });

ProductRouter.get("/",all);


export default ProductRouter;