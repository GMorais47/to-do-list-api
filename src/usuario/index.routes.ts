import { Router } from "express";
import { UsuarioController } from "./usuario.controller";
import { validarMiddleware } from "../middlewares/validar.middleware";
import { registro_schema } from "./schemas/registro.schema";
import { authMiddleware } from "../middlewares/auth.middleware";

const rotas_usuario = Router();

const controller = new UsuarioController();

rotas_usuario.post('/registro',
    (req, res, next) => validarMiddleware(req, res, next, registro_schema),
    (req, res) => controller.registro(req, res)
);

rotas_usuario.get('/my', authMiddleware, (req, res) => controller.my(req, res))

export default rotas_usuario;