import { Router } from "express";
import { AuthController } from "./auth.controller";
import { validarMiddleware } from "../middlewares/validar.middleware";
import login_schema from "./schemas/login.schema";

const rotas_auth = Router();

const controller = new AuthController();

rotas_auth.post('/login',
    (req, res, next) => validarMiddleware(req, res, next, login_schema),
    (req, res) => controller.login(req, res)
);

export default rotas_auth;
