import { IAuth } from "../types";
import { AppError } from "../utils/appError";
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

    async atualizar(usuario: IAuth) { }

    async deletar(usuario: IAuth) { }
}