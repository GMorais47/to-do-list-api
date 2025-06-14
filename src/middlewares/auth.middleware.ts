import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError";
import * as jwt from "jsonwebtoken";
import { UsuarioService } from "../usuario/usuario.service";
import { IAuth, IPayload } from "../types";

declare global {
    namespace Express {
        interface Request {
            usuario?: IAuth
        }
    }
}

const usuario_service = new UsuarioService();

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;

    if (!authorization) throw new AppError("Acesso negado!", 403);

    const [schema, token] = authorization.split(' ');

    if (!schema || !token || schema !== 'Bearer')
        throw new AppError("Acesso negado!", 403);

    const secret = process.env.JWT_SECRET;

    if (!secret) throw new AppError("Acesso negado!", 403);

    try {
        const payload = jwt.verify(token, secret) as IPayload;

        if (!payload.id || typeof payload.id !== "number") throw new Error();

        const usuario = await usuario_service.buscarPorId(payload.id);

        req.usuario = usuario
    } catch {
        throw new AppError("Acesso negado!", 403);
    }

    next()
}