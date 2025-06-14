import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {

    private readonly service: AuthService = new AuthService();

    async login(req: Request, res: Response) {
        const token = await this.service.login(req.body)
        res.json({ mensagem: "Logado com sucesso!", token });
        return;
    }
}