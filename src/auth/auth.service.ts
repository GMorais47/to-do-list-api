import "dotenv/config";
import { UsuarioService } from "../usuario/usuario.service"
import { ILoginDTO } from "./dtos/login.dto"
import * as bcrypt from "bcrypt";
import * as jwt from 'jsonwebtoken';
import { AppError } from "../utils/appError";

export class AuthService {

    private readonly usuario_service = new UsuarioService();

    async login(dto: ILoginDTO) {
        const secret = process.env.JWT_SECRET;

        if (!secret) throw new AppError("Informe a variavel de ambiente 'JWT_SECRET'!", 500)

        const usuario = await this.usuario_service.buscarPorEmail(dto.email);
        const match = await bcrypt.compare(dto.senha, usuario.senha);

        if (!match) throw new AppError("Usuário ou senha inválido!", 403);

        const payload = { id: usuario.id };

        const token = jwt.sign(payload, secret);

        return token

    }
}