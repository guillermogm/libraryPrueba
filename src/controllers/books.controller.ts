import { Request, Response } from "express"

export const getAllBooks = (req: Request, res:Response) =>{
    res.send('Get all books')
}
export const createBook = (req: Request, res:Response) =>{
    console.log(req.body)
    console.log(req.body.title)
    res.send('Book created')
}

export const updateBookById = (req: Request, res:Response) =>{
    res.send(`Book updated con id: ${req.params.id}`)
}

export const deleteBookById = (req: Request, res:Response) =>{
    res.send(`Book borrado con id: ${req.params.id}`)
}