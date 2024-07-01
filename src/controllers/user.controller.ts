import { Request, Response } from "express"

export const getUserProfile = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: "Get user profile"
    })
}
export const createUser = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: "User created"
    })
}

export const updateUserById = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: `User updated con id: ${req.params.id}`
    })
}

export const deleteUserById = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: `User borrado con id: ${req.params.id}`
    })
}
export const getUserById = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: `Get User con id: ${req.params.id}`
    })
}