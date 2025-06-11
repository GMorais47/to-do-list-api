export interface ICriarTarefaDTO {
    titulo: string;
    descricao: string;
    prioridade: "BAIXA" | "NORMAL" | "ALTA"
}