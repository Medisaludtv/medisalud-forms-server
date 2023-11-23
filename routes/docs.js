const express = require('express')
const { uploadForm } = require('../controllers/docsController')
const router = express.Router()


router.post('/uploadForm', uploadForm)

module.exports = router