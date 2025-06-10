import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError";

export function errorHandlerMiddleware(error: any, req: Request, res: Response, next: NextFunction) {

    if (error instanceof AppError) {
        res.status(error.status).json({
            error: {
                mensagem: error.message
            }
        })
        return;
    }

    if (error.isJoi) {
        res.status(400).json({
            error: {
                mensagem: error.message
            }
        })
        return;
    }
    
    console.error(error)

    res.status(500).json({
        error: {
            mensagem: "Erro interno do servidor!"
        }
    })
    return;
}