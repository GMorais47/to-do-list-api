import Joi from "joi";

const atualizar_tarefa_schema = Joi.object({
    titulo: Joi.string().min(3).max(100),
    descricao: Joi.string().min(3).max(250),
    prioridade: Joi.string()
        .valid('BAIXA','NORMAL', 'ALTA'),
    completa: Joi.boolean()
})

export default atualizar_tarefa_schema;