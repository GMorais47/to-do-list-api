import { IAuth } from "../types";
import { AppError } from "../utils/appError";
import { IAtualizarTarefaDTO } from "./dtos/atualizar-tarefa.dto";
import { ICriarTarefaDTO } from "./dtos/criar-tarefa.dto";
import { TarefaRepository } from "./tarefa.repository";

export class TarefaService {
    private readonly repository = new TarefaRepository();

    async buscarTodos(usuario: IAuth) {
        return await this.repository.buscarTodos(usuario.id);
    }

    async buscarPorId(id: number, usuario: IAuth) {
        const tarefa = await this.repository.buscarPorId(id, usuario.id);

        if (!tarefa) throw new AppError("Tarefa não encontrada!", 404);

        return tarefa;
    }

    async criar(dto: ICriarTarefaDTO, usuario: IAuth) {
        return await this.repository.criar(dto, usuario.id)
    }

    async atualizar(id: number, dto: IAtualizarTarefaDTO, usuario: IAuth) {
        const tarefa = await this.buscarPorId(id, usuario);

        if (tarefa.completa) throw new AppError("Não é possível atualizar uma tarefa concluída!", 401);

        const new_tarefa = await this.repository.atualizar(tarefa.id, {
            ...dto
        })

        return new_tarefa
    }

    async deletar(id: number, usuario: IAuth) {
        const tarefa = await this.buscarPorId(id, usuario);

        await this.repository.deletar(tarefa.id);
    }
}