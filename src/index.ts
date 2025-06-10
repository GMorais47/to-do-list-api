import "dotenv"
import express from "express";
import router from "./routes";
import { errorHandlerMiddleware } from "./middlewares/errorHandler.middleware";

const porta = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/api', router);
app.use(errorHandlerMiddleware);

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}!`)
});