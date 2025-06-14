import { EPrioridade, PrismaClient } from "../generated/prisma";
import { IAtualizarTarefaDTO } from "./dtos/atualizar-tarefa.dto";
import { ICriarTarefaDTO } from "./dtos/criar-tarefa.dto";

export class TarefaRepository {
    private readonly prisma = new PrismaClient();

    async buscarTodos(usuario_id: number) {
        return await this.prisma.tarefa.findMany({
            where: {
                usuario_id
            }
        })
    }

    async buscarPorId(id: number, usuario_id: number) {
        return await this.prisma.tarefa.findFirst({
            where: {
                id,
                usuario_id
            }
        })
    }

    async criar(dto: ICriarTarefaDTO, usuario_id: number) {
        return await this.prisma.tarefa.create({
            data: {
                ...dto,
                usuario_id
            }
        })
    }

    async atualizar(id: number, dto: IAtualizarTarefaDTO) {
        return await this.prisma.tarefa.update({
            where: { id },
            data: dto
        })
    }

    async deletar(id: number) {
        return await this.prisma.tarefa.delete({
            where: {
                id
            }
        })
    }
}