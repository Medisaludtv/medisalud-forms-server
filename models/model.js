const mongoose = require('mongoose')

const UsersSchema = mongoose.Schema(
  {
    _id: {
      type: String
    },
    name: {
      type: String
    },
    surname: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    phone: {
      type: Number
    },
    userLevel: {
      type: Number
    }
  }
)

const Users = mongoose.model('users', UsersSchema)

module.exports = { Users }
