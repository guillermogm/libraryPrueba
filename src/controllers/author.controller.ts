import { Request, Response } from "express"

export const getAllAuthor = (req: Request, res:Response) =>{
    res.send('Get all authors')
}
export const createdAuthor = (req: Request, res:Response) =>{
    console.log(req.body)
    console.log(req.body.name)
    res.send('Author created')
}

export const updateAuthorById = (req: Request, res:Response) =>{
    res.send(`Author updated con id: ${req.params.id}`)
}

export const deleteAuthorById = (req: Request, res:Response) =>{
    res.send(`Author borrado con id: ${req.params.id}`)
}