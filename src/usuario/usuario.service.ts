import { IRegistroDTO } from "./dtos/registro.dto";
import { UsuarioRepository } from "./usuario.repository";
import bcrypt from "bcrypt";

export class UsuarioService {
    private readonly repository: UsuarioRepository = new UsuarioRepository();

    async criar(data: IRegistroDTO) {
        const usuario = await this.buscarPorEmail(data.email)
            .catch(() => undefined);

        if (usuario) throw new Error();

        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(data.senha, salt);

        const { senha: _, email: __, ...usuario_db } = await this.repository.criar({
            ...data,
            senha: hash
        })

        return usuario_db
    }

    async buscarPorId() { }

    private async buscarPorEmail(data: string) {
        const usuario = await this.repository.buscarPorEmail(data);

        if (!usuario) throw new Error();

        return usuario
    }
}