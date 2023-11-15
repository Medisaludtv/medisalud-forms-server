const { Users } = require('../models/model')

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await Users.findOne({ where: { email } })
  if (!user) return res.status(400).json({ msg: 'User does not exist' })
  const isMatch = await user.comparePassword(password)
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })
  res.json('Correcto')
}

module.exports = { login }
