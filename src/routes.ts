import { Router } from "express";
import rotas_usuario from "./usuario/index.routes";
import rotas_auth from "./auth/index.routes";
import rotas_tarefas from "./tarefa/index.route";
import { authMiddleware } from "./middlewares/auth.middleware";

const router = Router();

router.use('/auth', rotas_auth);
router.use('/usuario', rotas_usuario);
router.use('/tarefa', authMiddleware, rotas_tarefas);

export default router;