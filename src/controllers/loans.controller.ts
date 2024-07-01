import { Request, Response } from "express"

export const getAllLoans = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: "Get all loans"
    })
}
export const createLoans = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: "Loan created"
    })
}

export const updateLoanById = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: `Loan updated con id: ${req.params.id}`
    })
}

export const deleteLoanById = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: `Loan borrado con id: ${req.params.id}`
    })
}
export const getLoanById = (req: Request, res:Response) =>{
    res.json({
        success: true,
        message: `Get Loan con id: ${req.params.id}`
    })
}