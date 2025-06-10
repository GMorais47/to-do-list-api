import { AppError } from "../utils/appError";
import { IRegistroDTO } from "./dtos/registro.dto";
import { UsuarioRepository } from "./usuario.repository";
import bcrypt from "bcrypt";

export class UsuarioService {
    private readonly repository: UsuarioRepository = new UsuarioRepository();

    async criar(data: IRegistroDTO) {
        const usuario = await this.buscarPorEmail(data.email)
            .catch(() => undefined);

        if (usuario) throw new AppError("Já existe um usuario com esse e-mail!", 409);

        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(data.senha, salt);

        const { senha: _, email: __, ...usuario_db } = await this.repository.criar({
            ...data,
            senha: hash
        })

        return usuario_db
    }

    async buscarPorId() { }

    async buscarPorEmail(data: string) {
        const usuario = await this.repository.buscarPorEmail(data);

        if (!usuario) throw new AppError("Usuário não encontrado!", 404);

        return usuario
    }
}