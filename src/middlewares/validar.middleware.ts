import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const validarMiddleware = (req: Request, res: Response, next: NextFunction, schema: Joi.Schema) => {
    const body = req.body;
    const { error } = schema.validate(body);

    if (!body || error) {
        res.sendStatus(400);
        return;
    }

    next();
}