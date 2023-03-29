const User = require('../models/users')

const createUser = async (req, res) => {
  const { nombre, email, password, estado, rol } = req.body;
  const nuevoUsuario = new User({
    nombre,
    email,
    password,
    estado,
    rol
  })

  await nuevoUsuario.save()

  res.json({
    mensaje: `Usuario ${nombre} creado con exito`
  })
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    console.log(error)
  }
}

const deleteUsers = async (req, res) => {
  try {
  await User.findByIdAndDelete(req.params.userId)
    res.json({
      mensaje: 'Usuario eliminado'
    })
  } catch (error) {
    console.log(error)
  }
}

const estadoUser = async (req, res) => {
  const { id, newEstado } = req.body;
    await User.findByIdAndUpdate(id,{estado: newEstado})
  res.json({
    mensaje: `Uusario Modificado`
  })
}

module.exports = {createUser, getUsers, deleteUsers, estadoUser}