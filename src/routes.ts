import { Router } from "express";
import rotas_usuario from "./usuario/index.routes";
import rotas_auth from "./auth/index.routes";

const router = Router();

router.use('/auth', rotas_auth);
router.use('/usuario', rotas_usuario);

export default router;