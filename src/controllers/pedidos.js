const pedidos = require("../../dados/pedidos.json")

function subtotais() {
    pedidos.forEach(p => {
        p.subtotal = p.quantidade * p.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1
    pedidos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    subtotais()
    res.json(pedidos)
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body
    let status = 0

    pedidos.forEach((pedido) => {
        if (pedido.id == id) {
            pedido.produto = dados.produto
            pedido.preco = dados.preco
            pedido.quantidade = dados.quantidade
            status = 1
        }
    })
    if(status == 1) {
        res.send("Pedido atualizado com sucesso")
    }else{
        res.status(404).send("Erro ao atualizar pedido")
    }

}
const excluir = (req, res) => {
    const id = req.params.id
    let status = 0

    pedidos.forEach((pedido, indice) => {
        if(pedido.id == id) {
            status = 1
            pedidos.splice(indice, 1)
        }
    })
    if(status == 1) {
        res.send("Pedido excluido com sucesso")
    }else{
        res.status(404).send("Erro ao excluir pedido")
    }
}

module.exports = {
    criar,
    listar,
    alterar,
    excluir
}