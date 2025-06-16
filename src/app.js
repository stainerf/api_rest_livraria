import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js"

const conexao = await conectaNaDatabase();

//on é da biblioteca mongoose
conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);    
});

//once é da biblioteca mongoose
conexao.once("open", () => {
    console.log("Conexão com o banco realizada com sucesso!");
    
})

const app = express();
routes(app);

export default app;

