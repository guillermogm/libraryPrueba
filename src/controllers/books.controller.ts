import { Request, Response } from "express"

export const getAllBooks = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: "Get all books"
    })
}
export const createBook = (req: Request, res:Response) =>{
    console.log(req.body)
    console.log(req.body.title)
    res.json({
        success: true,
        message: "Book created"
    })
}

export const updateBookById = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: `Book updated con id: ${req.params.id}`
    })
}

export const deleteBookById = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: `Book borrado con id: ${req.params.id}`
    })
}
export const getBookById = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: `Get book con id: ${req.params.id}`
    })
}