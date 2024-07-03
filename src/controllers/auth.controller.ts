import { Request, Response } from "express"
import { User } from "../database/models/User"
import bcrypt from "bcrypt"

export const signInUser = async (req: Request, res:Response) =>{
    try {
        // saca info del body del json
        const email = req.body.email
        const password = req.body.password

        // Comprobar campos vacios
        if (!email) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Email is required"
                }
            )
        }
        if (!password) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Password is required"
                }
            )
        }
        if(password.length <8  || password.length >12){
            return res.status(400).json(
                {
                    success: false,
                    message: "Password must be beetween 8 and 12"
                }
            )
        }
        // To do validar formato email y encriptar  contraseña

       const hashedPass = bcrypt.hashSync(password, 10)

        // Guardar datos en la base de datos
        const newUser = await User.create({
            email: email,
            password: hashedPass
        }).save()

        // Respuesta correcta de guardado
        res.json({
            success: true,
            message: "Author created",
            data: newUser
        })
    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Error creating User",
            error: error
        })

    }
}
export const logInUser = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: "User logged"
    })
}

