import { PrismaClient, Usuario } from "../generated/prisma";
import { IRegistroDTO } from "./dtos/registro.dto";

export class UsuarioRepository {
    private readonly prisma = new PrismaClient();

    async buscarPorEmail(data: string) {
        return await this.prisma.usuario.findFirst({
            where: {
                email: data.toLowerCase()
            }
        })
    }

    async criar(data: IRegistroDTO) {
        return await this.prisma.usuario.create({ data })
    }
}