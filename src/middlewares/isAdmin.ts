import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { TokenDecoded } from "../types";

export const isAdmin= (req: Request,res: Response, next: NextFunction)=>{
    try {
    console.log(req.headers.authorization)

    if(!req.headers.authorization){
       return res.status(401).json({
            success:false,
            message:"Unauthorized"
        })
    }
    const token=req.headers.authorization.split(" ")[1]
    const decoded= jwt.verify(token,process.env.SECRET as string) as TokenDecoded;

    if (decoded.role !== "admin"){
        return res.status(401).json({
            success:false,
            message:"Unauthorized"
        })
    }

    req.tokenData= {
        id: decoded.id,
        role: decoded.role
    }

    next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error Authentication"
        })
    }

}