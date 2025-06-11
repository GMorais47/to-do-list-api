import { Request, Response } from "express";
import { TarefaService } from "./tarefa.service";

export class TarefaController {

    private readonly service = new TarefaService();

    async buscarTodos(req: Request, res: Response) {
        const usuario = req.usuario!
        const response = await this.service.buscarTodos(usuario);
        res.json({ data: response });
        return;
    }

    async buscarPorId(req: Request, res: Response) {
        const usuario = req.usuario!;
        const id = Number(req.params.id);
        const tarefa = await this.service.buscarPorId(id, usuario);
        res.json({ data: tarefa });
        return;
    }

    async criar(req: Request, res: Response) {
        const usuario = req.usuario!
        const tarefa = await this.service.criar(req.body, usuario)
        res.status(201).json({
            mensagem: "Tarefa criada com sucesso!",
            data: tarefa
        })
        return;
    }

    async atualizar(req: Request, res: Response) {
        const usuario = req.usuario!
    }

    async deletar(req: Request, res: Response) {
        const usuario = req.usuario!
    }
}