import { Request, Response } from "express"
import { Fauvorite } from "../database/models/Favourite"

export const createFauvorite = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.id
        const bookId = req.body.book_id

        if(!bookId){
            return res.status(400).json({
                success:false,
                message:"No book found"
            })
        }

        const newFauvorite= await Fauvorite.create({
            user_id:userId,
            book_id: bookId
        }).save()
    
        return res.status(201).json({
            success: true,
            message: "Fauvorite Book created"

        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating fauvorite Book",
            error: error
        })
    }
}
export const deleteFauvorite = async(req: Request, res:Response) =>{
    try {
        const favouriteId =Number(req.params.id)
        const userId = req.tokenData.id

       const userFav= await Fauvorite.findOne({
            where:{
                id:favouriteId,
                user_id:userId
            }
        })
        if(!userFav){
            return res.status(404).json({
                success:false,
                message:"You don't have authoritation to delete this book"
            })
        }

        const deleteFauvorite = Fauvorite.delete(favouriteId)

        if(!deleteFauvorite){
            return res.status(404).json({
                success:false,
                message:"This favourite book doesn't exist"
            })
        }
        
        res.status(200).json({
            succes:true,
            message:"Delete Fauvorite successfully",
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting Book",
            error: error
        })
    }
}