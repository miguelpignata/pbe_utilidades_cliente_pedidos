const clientes = require("../../dados/clientes.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id) + 1
    clientes.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    res.json(clientes)
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body
    let status = 0

    clientes.forEach((cliente) => {
        if (cliente.id == id) {
            cliente.produto = dados.produto
            cliente.preco = dados.preco
            cliente.quantidade = dados.quantidade
            status = 1
        }
    })
    if(status == 1) {
        res.send("cliente atualizado com sucesso")
    }else{
        res.status(404).send("Erro ao atualizar cliente")
    }

}
const excluir = (req, res) => {
    const id = req.params.id
    let status = 0

    clientes.forEach((cliente, indice) => {
        if(cliente.id == id) {
            status = 1
            clientes.splice(indice, 1)
        }
    })
    if(status == 1) {
        res.send("cliente excluido com sucesso")
    }else{
        res.status(404).send("Erro ao excluir cliente")
    }
}


module.exports = {
    criar, listar, alterar, excluir
}