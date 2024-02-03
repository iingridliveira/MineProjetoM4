import { produto } from "../model/produto.js";
var produtos = []
function listaProdutos(nome, tipo, potencia, tempo, dias){
 var novoProduto = new produto(nome, tipo, potencia, tempo, dias)
 produtos.push(novoProduto)
 return novoProduto;
}
function getProduto() {
    return produtos;
}

function atualizarProdutos(nome) {
  let produto = produtos.find(produto => produto.nome ===  nome)
  if(produto){
     let ProdutoIndex = produtos.findIndex(produto => produto.nome == nome);
     produtos[ProdutoIndex].consumo = produtos[ProdutoIndex].consumo = (produtos[ProdutoIndex].potencia * (produtos[ProdutoIndex].tempo*produtos[ProdutoIndex].dias))/1000
     return produtos[ProdutoIndex];
  }else{
     return "olha Produto nao encontrado"
  }
}
function apagaProdutos(nome) {
  let produto = produtos.find(produto => produto.nome ===  nome)
  if(produto){
     let ProdutoIndex = produtos.findIndex(produto => produto.nome == nome);
     produtos[ProdutoIndex].consumo > 300
     return produtos.splice[ProdutoIndex];
  }else{
     return "olha Produto nao encontrado"
  }
}
export {listaProdutos, getProduto,atualizarProdutos,apagaProdutos}