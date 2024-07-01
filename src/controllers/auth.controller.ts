import { Request, Response } from "express"

export const signInUser = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: "User created"
    })
}
export const logInUser = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: "User logged"
    })
}

