import { produto } from "../model/produto.js";
var produtos = []
function listaProdutos(nome, tipo, potencia, tempo, dias,taxa){
 var novoProduto = new produto(nome, tipo, potencia, tempo, dias,taxa)
 produtos.push(novoProduto)
 return novoProduto;
}
function getProduto() {
    return produtos;
}

function atualizarProdutosconsumo(nome) {
  let produto = produtos.find(produto => produto.nome ===  nome)
  if(produto){
     let ProdutoIndex = produtos.findIndex(produto => produto.nome == nome);
     produtos[ProdutoIndex].consumo =
     produtos[ProdutoIndex].consumo =
     (produtos[ProdutoIndex].potencia *
     (produtos[ProdutoIndex].tempo*
      produtos[ProdutoIndex].dias))/1000
     console.log(`Produto consumindo ${produtos[ProdutoIndex].consumo} kWh`);
    return produtos[ProdutoIndex];
  }else{
     return "olha Produto nao encontrado"
  }
}
function atualizarProdutostaxa(nome) {
    let produto = produtos.find(produto => produto.nome ===  nome)
    if(produto){
    let ProdutoIndex = produtos.findIndex(produto => produto.nome == nome);
     produtos[ProdutoIndex].gasto = produtos[ProdutoIndex].gasto =
     produtos[ProdutoIndex].consumo * produtos[ProdutoIndex].taxa
     console.log(`Produto gastou R$ ${produtos[ProdutoIndex].gasto},00 a uma taxa
     R$${produtos[ProdutoIndex].taxa}`);
      return produtos[ProdutoIndex];
    }else{
       return "olha Produto nao encontrado"
    }
  }
function apagaProdutos(nome) {
   let produtoApagarIndex = produtos.findIndex(produto => produto.nome === nome);
    if (produtoApagarIndex !== -1) { 
     if (produtos[produtoApagarIndex].consumo >= 300) {
       console.log("Produto atingiu consumo >= 300 kWh");
       const produtoRemovido = produtos.splice(produtoApagarIndex, 1)[0];
       return produtoRemovido;
       } else {
           console.log("Produto não atingiu consumo >= 300 kWh");
           return "Produto não atingiu 300kw/h.";
       }
    } else {
       console.log("Produto não encontrado");
       return "Produto não encontrado.";
   }
}

export {listaProdutos, getProduto,atualizarProdutosconsumo,atualizarProdutostaxa,apagaProdutos}