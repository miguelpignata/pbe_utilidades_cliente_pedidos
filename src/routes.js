const express = require("express")
const router = express.Router()

const Cliente = require("./controllers/cliente")
const Pedido = require("./controllers/pedido")

const rotaInicial = (req, res) => {
    res.json("Pedidos MVC respondendo")
}

router.get('/', rotaInicial)
router.get('/clientes', Cliente.listar)
router.get('/pedidos', Pedido.listar)
router.post('/clientes', Cliente.criar)
router.post('/pedidos', Pedido.criar)
router.put('/clientes/:id', Cliente.alterar)
router.put('/pedidos/:id', Pedido.alterar)
router.delete('/clientes/:id', Cliente.excluir)
router.delete('/pedidos/:id', Pedido.excluir)


module.exports = router