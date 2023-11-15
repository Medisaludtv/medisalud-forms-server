const express = require('express')
const router = express.Router()

const { login } = require('../controllers/usersController')

router.get('/login', login)
