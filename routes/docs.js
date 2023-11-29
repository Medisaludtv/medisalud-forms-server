const express = require('express')
const { uploadForm, uploadDoc, getClientForms } = require('../controllers/docsController')
const router = express.Router()

router.post('/uploadForm', uploadForm)
router.post('/uploadDoc', uploadDoc)
router.get('/getClientForms', getClientForms)

module.exports = router
