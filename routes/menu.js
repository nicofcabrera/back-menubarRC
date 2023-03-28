const express = require('express');
const route = express.Router();
const {createMenu, getMenu, deleteMenu} = require('../controllers/menu')

route.post('/post-menu', createMenu)
route.get('/get-menu', getMenu)
route.delete('/:userId', deleteMenu)

module.exports = route;