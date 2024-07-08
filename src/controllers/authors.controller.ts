import { Request, Response } from "express"
import { Author } from "../database/models/Author"

export const getAllAuthor = async (req: Request, res: Response) => {
    try {
        let limit= Number(req.query.limit) || 5
        const page= Number(req.query.page) || 1

        if (limit>10){
            limit=10
        }
        const Authors = await Author.find({
            skip:(page-1)*limit,
            take:limit
        })
        res.status(200).json({
            success: true,
            message: "Authors retrive successfully",
            data: Authors
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrive authors",
            error: error
        })

    }
}
export const getAuthor = async (req: Request, res: Response) => {

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
            message: "Error creating author",
            error: error
        })

    }
}

export const updateAuthorById = async(req: Request, res: Response) => {
    try {
        const idUpdate =req.params.id
        const newInfo=req.body
        
        const updateAuthor = await Author.update({id:parseInt(idUpdate)}, newInfo)
        res.status(200).json({
            succes:true,
            message:"Update Author successfully",
            data:updateAuthor
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Updating author",
            error: error
        })
    }
}

export const deleteAuthorById = async (req: Request, res: Response) => {
    try {
        const idDelete =req.params.id
        const deleteAuthor = await Author.delete(Number(idDelete))
        if(!deleteAuthor.affected){
            return res.status(404).json({
                success:false,
                message:"Author doesn't exist"
            })
        }
        res.status(200).json({
            succes:true,
            message:"Delete Author successfully",
            data:deleteAuthor
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting author",
            error: error
        })
    }
}