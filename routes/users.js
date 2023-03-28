const express = require('express');
const route = express.Router();
const {createUser, getUsers, deleteUsers, estadoUser} = require('../controllers/users')

route.post('/post-user', createUser)
route.get('/get-users', getUsers)
route.patch('/patch-users', estadoUser)
route.delete('/:userId', deleteUsers)

module.exports = route;