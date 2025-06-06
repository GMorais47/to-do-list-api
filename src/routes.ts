import { Router } from "express";
import rotas_usuario from "./usuario/index.routes";

const router = Router();

router.use('/usuario', rotas_usuario);

export default router;