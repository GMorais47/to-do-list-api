import Joi from "joi";

const login_schema = Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.string().required()
})

export default login_schema;