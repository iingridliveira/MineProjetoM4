
import { Router } from "express";
import { listaProdutos,getProduto, atualizarProdutos,apagaProdutos} from "../controller/listaProduto.js";
const produtosRoute = Router();
produtosRoute.post("/produtopostar", (req, res) => {
    const {nome, tipo, potencia, tempo,dias} = req.body;
    const novoProduto = listaProdutos(nome, tipo, potencia, tempo, dias);
    res.json({novoProduto});
});
produtosRoute.get("/produtopegar", (req, res) => {
    const listaProduto = getProduto();
    res.json({ listaProduto });
});

produtosRoute.patch("/produtoatualizar", (req, res) => {
    const {nome} = req.body;
    const listaProduto = atualizarProdutos(nome);
    res.json({listaProduto});
});
produtosRoute.delete("/produtoapagar", (req, res) => {
    const {nome} = req.body;
    const listaProduto = apagaProdutos(nome);
    res.json({listaProduto});
});

export{produtosRoute}