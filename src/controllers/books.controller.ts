import { Request, Response } from "express"
import { Book } from "../database/models/Book"

export const getAllBooks = async(req: Request, res:Response) =>{
try {
    const allBooks= await Book.find()
    return res.status(201).json({
        success: true,
        message: "All Books retrived",
        data: allBooks

    })
    
} catch (error) {
   return res.status(500).json({
        success: false,
        message: "Error getting Books",
        error: error
    })
}
}
export const createBook = async (req: Request, res:Response) =>{
try {
    const title= req.body.title
    const description= req.body.description
    const authorId=req.body.author_id

    if(!title || !authorId){
        res.status(400).json({
            success: false,
            message: "Title and Author are null"
        }) 
    }

   const createBook= await Book.create({
        title:title,
        description: description,
        authorId: authorId
    }).save()

    return res.status(201).json({
        success: true,
        message: "Book created"
    })

    
} catch (error) {

    return res.status(500).json({
        success: false,
        message: "Error creating Book",
        error: error
    })

    
}
}

export const updateBookById = async(req: Request, res:Response) =>{
    try {
        const idUpdate =req.params.id
        const newInfo=req.body
        
        const updateBook = await Book.update({id:parseInt(idUpdate)}, newInfo)
        res.status(200).json({
            succes:true,
            message:"Update Book successfully",
            data:updateBook
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Updating Book",
            error: error
        })
    }
}

export const deleteBookById = async(req: Request, res:Response) =>{
    try {
        const idDelete =req.params.id
        const deleteBook = await Book.delete(Number(idDelete))
        if(!deleteBook.affected){
            return res.status(404).json({
                success:false,
                message:"Book doesn't exist"
            })
        }
        res.status(200).json({
            succes:true,
            message:"Delete Book successfully",
            data:deleteBook
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting Book",
            error: error
        })
    }
}
export const getBookById = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: `Get book con id: ${req.params.id}`
    })
}