const express = require('express')
const { uploadForm, uploadDoc } = require('../controllers/docsController')
const router = express.Router()

router.post('/uploadForm', uploadForm)
router.post('/uploadDoc', uploadDoc)

module.exports = router
