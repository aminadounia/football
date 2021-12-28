import express from "express";

const router=express.Router();


router.use('/',(req,res,next)=>{
    res.send("Router 1");
})

export default router;

