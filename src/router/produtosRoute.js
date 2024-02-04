
import { Router } from "express";
import { listaProdutos,getProduto,getProdutoconsumo,getProdutogasto,atualizarProdutosconsumo,
atualizarProdutostaxa,apagaProdutos} from "../controller/listaProduto.js";
const produtosRoute = Router();
produtosRoute.post("/produtopostar", (req, res) => {
    const {nome, tipo, potencia, tempo,dias,taxa} = req.body;
    const novoProduto = listaProdutos(nome, tipo, potencia, tempo, dias,taxa);
    res.json({novoProduto});
});
produtosRoute.get("/produtopegar", (req, res) => {
    const listaProduto = getProduto();
    res.json({ listaProduto });
});
produtosRoute.get("/produtopegaratualizadoconsumo", (req, res) => {
    const listaProduto = getProdutoconsumo();
    res.json({ listaProduto });
});
produtosRoute.get("/produtopegaratualizadogasto", (req, res) => {
    const listaProduto = getProdutogasto();
    res.json({ listaProduto });
});

produtosRoute.patch("/produtoatualizarconsumo", (req, res) => {
    const {nome} = req.body;
    const listaProduto = atualizarProdutosconsumo(nome);
    res.json({listaProduto});
});
produtosRoute.patch("/produtoatualizargasto", (req, res) => {
    const {nome} = req.body;
    const listaProduto = atualizarProdutostaxa(nome);
    res.json({listaProduto});
});
produtosRoute.delete("/produtoapagar", (req, res) => {
    const {nome} = req.body;
    const listaProduto = apagaProdutos(nome);
    res.json({listaProduto});
});

export{produtosRoute}