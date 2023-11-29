const express = require('express')
const { uploadForm, uploadDoc, getClientForms } = require('../controllers/docsController')
const router = express.Router()

router.post('/uploadForm', uploadForm)
router.post('/uploadDoc', uploadDoc)
router.post('/getClientForms', getClientForms)

module.exports = router
