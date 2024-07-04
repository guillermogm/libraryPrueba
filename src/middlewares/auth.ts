import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export const auth= (req: Request,res: Response, next: NextFunction)=>{
    try {
    console.log(req.headers.authorization)

    if(!req.headers.authorization){
       return res.status(401).json({
            success:false,
            message:"Unauthorized"
        })
    }
    //spit convierte en Arrays a partir de un caracter
    const token=req.headers.authorization.split(" ")[1]
    const decoded= jwt.verify(token,process.env.SECRET as string)

    console.log(decoded)

    next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error Authentication"
        })
    }

}