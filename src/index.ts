import "dotenv"
import express from "express";
import router from "./routes";

const porta = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/api', router);

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}!`)
});