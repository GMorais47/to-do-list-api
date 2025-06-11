import Joi from "joi";

const criar_tarefa_schema = Joi.object({
    titulo: Joi.string().min(3).max(100).required(),
    descricao: Joi.string().min(3).max(250).required(),
    prioridade: Joi.string()
        .valid('BAIXA','NORMAL', 'ALTA')
        .required()
})

export default criar_tarefa_schema;