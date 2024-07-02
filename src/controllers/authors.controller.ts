import { Request, Response } from "express"
import { Author } from "../database/models/Author"

export const getAllAuthor = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: "Get all authors"
    })
}
export const getAuthor = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Get author: ${req.params.id}`
    })
}
export const createdAuthor = async (req: Request, res: Response) => {
    try {
        // saca info del body del json
        const name = req.body.name
        const nationality = req.body.nationality
        // Comprobar campos vacios
        if (!name) {
            return res.status(400).json(
                {
                    success: false,
                    message: "name is required"
                }
            )
        }
        if (!nationality) {
            return res.status(400).json(
                {
                    success: false,
                    message: "nationality is required"
                }
            )
        }
        // Guardar datos en la base de datos
        const newAuthor = await Author.create({
            name: name,
            nationality: nationality
        }).save()

        // Respuesta correcta de guardado
        res.json({
            success: true,
            message: "Author created",
            data: newAuthor
        })
    } catch (error) {

       res.status(500).json({
        success: false,
        message:"Error creating author"
       })

    }
}

export const updateAuthorById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Author updated con id: ${req.params.id}`
    })
}

export const deleteAuthorById = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: `Author borrado con id: ${req.params.id}`
    })
}