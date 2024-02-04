import express from "express";
import { produtosRoute } from "./src/router/produtosRoute.js";
const app = express();
const port = 2010;
app.use(express.json());
app.use(produtosRoute );

app.listen(port, ()=> {
    console.log("Server run🚀")
})
