const express = require('express');
const route = express.Router();
const {createPedido, getPedido, deletePedido} = require('../controllers/pedido')

route.post('/post-pedido', createPedido)
route.get('/get-pedido', getPedido)
route.delete('/:userId', createPedido)

module.exports = route;