module.exports = {
    precoComDesconto(produto) {
        if (produto.desconto > 0) {
            return produto.preco * (100 - produto.desconto) / 100
        }
        return produto.preco
    }
}