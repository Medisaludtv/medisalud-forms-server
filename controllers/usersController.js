const { Users } = require('../models/model')

const login = async (req, res) => {
  const { email, password } = req.body
  console.log(email, password)
  const user = await Users.findOne({ email })
  if (!user) return res.status(400).json({ msg: 'El usuario no existe' })
  if (user.password !== password) return res.status(400).json({ msg: 'Las credencialers no son correctas' })
  return res.json({ msg: 'correcto' })
}

module.exports = { login }
