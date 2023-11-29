const express = require('express')
const { uploadForm, uploadDoc, getClientForms, getNCLForms, getMedicalSignedForms } = require('../controllers/docsController')
const router = express.Router()

router.post('/uploadForm', uploadForm)
router.post('/uploadDoc', uploadDoc)
router.get('/getClientForms', getClientForms)
router.get('/getNCLForms', getNCLForms)
router.get('/getMedicalSignedForms', getMedicalSignedForms)

module.exports = router
