const express = require('express');
const route = express.Router();
const { createUser, getUsers, deleteUsers, estadoUser, loginUser } = require('../controllers/users')
const {jwtValidator} = require('../middleware/jwt')

route.post('/post-user', createUser)
route.post('/userlogin', loginUser)
route.get('/get-users', getUsers)
route.patch('/patch-users', estadoUser)
route.delete('/:userId',jwtValidator, deleteUsers)

module.exports = route;