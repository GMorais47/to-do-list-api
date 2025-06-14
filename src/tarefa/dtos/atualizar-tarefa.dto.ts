import { ICriarTarefaDTO } from "./criar-tarefa.dto";

export interface IAtualizarTarefaDTO extends Partial<ICriarTarefaDTO> {
    completa?: boolean
}