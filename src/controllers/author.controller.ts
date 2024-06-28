import { Request, Response } from "express"

export const getAllAuthor = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: "Get all authors"
    })
}
export const createdAuthor = (req: Request, res:Response) =>{
    console.log(req.body)
    console.log(req.body.name)
    res.json({
        success: true,
        message: "Author created"
    })
}

export const updateAuthorById = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: `Author updated con id: ${req.params.id}`
    })
}

export const deleteAuthorById = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: `Author borrado con id: ${req.params.id}`
    })
}