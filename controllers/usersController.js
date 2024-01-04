const { Users } = require('../models/model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await Users.findOne({ email })
  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!user) return res.status(400).json({ msg: 'El usuario no existe' })
  if (!isPasswordValid) return res.status(400).json({ msg: 'Las credencialers no son correctas' })

  const token = jwt.sign(
    { user },
    process.env.JWT_SECRET,
    { expiresIn: '1h' } // El token expira en 1 día
  )

  res.setHeader('Content-Type', 'application/json')
  return res.json({ token })
}

module.exports = { login }
