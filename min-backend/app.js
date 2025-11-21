import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ProductRouter from "./Routes/ProductRouter.js";
import ProductModel from "./Models/ProductModel.js";
import cors from "cors";

//config
dotenv.config();
const app=express();
app.use(cors({origin:"*"}));

//database
const mongo_url=process.env.MONGO;
mongoose.connect(mongo_url).then((e)=>{
    console.log("db connected");
});

//router
app.use("/api/product",ProductRouter);

//db seed
app.get('/store',async(req,res)=>{
    const data=[
        {
            name:"product three",
            price:3000,
            image:"https://s.alicdn.com/@sc04/kf/H520c539c52094ed5b843d53a6744d7ddW.jpg_300x300.jpg",
            description:"this is product three description",
        },
        {
            name:"product four",
            price:3000,
            image:"https://s.alicdn.com/@sc04/kf/H1e394e7d965f44e3985653fc80ade9a4Z.jpg_300x300.jpg",
            description:"this is product four description",
        },
           {
            name:"product four",
            price:7000,
            image:"https://s.alicdn.com/@sc04/kf/UTB8.NhesiDEXKJk43Oqq6Az3XXa0.jpg_250x250xz.jpg",
            description:"this is product five description",
        },
        
    ];

    data.map(async(d)=>{
        await ProductModel.create(d);
    });
    res.send("stored");
});


const port=process.env.PORT;
app.listen(port,()=>{
    console.log("server running on port" + port);
})
