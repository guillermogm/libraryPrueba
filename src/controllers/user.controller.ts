import { Request, Response } from "express"
import { User } from "../database/models/User"


export const getUsers = async (req: Request, res: Response) => {
    try {

        const allUsers = await User.find({
            select: { id: true, name: true, email: true },
        })
        return res.status(201).json({
            success: true,
            message: "All Users retrived",
            data: allUsers

        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error retirng  Users",
            error: error
        })
    }
}
export const createUser = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: "User created"
    })
}

export const updateUserById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `User updated con id: ${req.params.id}`
    })
}

export const deleteUserById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `User borrado con id: ${req.params.id}`
    })
}
export const getUserById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Get User con id: ${req.params.id}`
    })
}
export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.id
        const profile = await User.findOne({
            where: { id: userId }
        })
        return res.status(201).json({
            success: true,
            message: "User profile retrived",
            data: profile

        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error retirng  Users",
            error: error
        })
    }
}
export const getUserFavouritesBooks = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.id
        const fauvoritesBooks = await User.findOne({
            select:{
                id:true,
                name:true,
                email:true,
                favourite_books:{
                    id:true,
                    book:{
                        id:true,
                        title:true,
                        author:{
                            id:true,
                            name:true
                        }
                    }
                }
            },
            where: {
                id: userId
            },
            relations: {
                favourite_books:{
                    book:{
                        author:true
                    }
                }
            }
        })
        return res.status(201).json({
            success: true,
            message: "All fauvorites Books retrived",
            data: fauvoritesBooks

        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error getting fauvorites Books",
            error: error
        })
    }
}