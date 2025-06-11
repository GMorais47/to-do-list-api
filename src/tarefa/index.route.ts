import { Router } from "express";
import { TarefaController } from "./tarefa.controller";
import { validarIdMiddleware } from "../middlewares/validarId.middleware";
import { validarMiddleware } from "../middlewares/validar.middleware";
import criar_tarefa_schema from "./schemas/criar-tarefa.schema";

const rotas_tarefas = Router();

const controller = new TarefaController();

rotas_tarefas.get('/all', (req, res) => controller.buscarTodos(req, res));
rotas_tarefas.get('/:id', validarIdMiddleware, (req, res) => controller.buscarPorId(req, res));

rotas_tarefas.post('/',
    (req, res, next) => validarMiddleware(req, res, next, criar_tarefa_schema),
    (req, res) => controller.criar(req, res)
);

rotas_tarefas.patch('/:id', validarIdMiddleware, (req, res) => controller.atualizar(req, res));

rotas_tarefas.delete('/:id', validarIdMiddleware, (req, res) => controller.deletar(req, res));

export default rotas_tarefas;