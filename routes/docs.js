const express = require('express')
const { uploadForm, getClientForms, getNCLForms, getMedicalSignedForms, getFormByID, updateForm } = require('../controllers/docsController')
const router = express.Router()

router.post('/uploadForm', uploadForm)
router.post('/updateForm', updateForm)
router.post('/getFormByID', getFormByID)
router.get('/getClientForms', getClientForms)
router.get('/getNCLForms', getNCLForms)
router.post('/getMedicalSignedForms', getMedicalSignedForms)

module.exports = router
