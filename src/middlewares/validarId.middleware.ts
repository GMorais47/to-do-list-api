import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError";

export function validarIdMiddleware(req: Request, res: Response, next: NextFunction) {
    const params = req.params;

    if (!params.id) throw new AppError("Id não encontrado!", 400);

    const id = Number(params.id);

    if (isNaN(id) || id <= 0) throw new AppError("Id inválido!", 400);

    next();
}