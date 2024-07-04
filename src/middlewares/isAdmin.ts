import { NextFunction, Request, Response } from "express";

export const isAdmin= (req: Request,res: Response, next: NextFunction)=>{
    try {

    if (req.tokenData.role !== "admin"){
        return res.status(401).json({
            success:false,
            message:"Unauthorized"
        })
    }

    next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error Authentication"
        })
    }

}