const Menu = require('../models/menu');

const createMenu = async (req, res) => {
  const { nombre, estado, precio, detalle, categoria } = req.body;
  const nuevoMenu = new Menu({
    nombre,
    estado,
    precio,
    detalle,
    categoria
  })

  await nuevoMenu.save()

  res.json({
    mensaje: `Comida nueva agregada`
  })
}

const getMenu = async (req, res) => {
  try {
    const menu = await Menu.find({})
    res.json(menu)
  } catch (error) {
    console.log(error)
  }
}

const deleteMenu = async (req, res) => {
  try {
  await Menu.findByIdAndDelete(req.params.userId)
    res.json({
      mensaje: 'Usuario eliminado'
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {createMenu, getMenu, deleteMenu}