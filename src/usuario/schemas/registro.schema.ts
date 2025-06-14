import Joi from "joi";

export const registro_schema = Joi.object({
    nome: Joi.string().min(3).max(200).required(),
    email: Joi.string().email().required(),
    senha: Joi.string().required()
})