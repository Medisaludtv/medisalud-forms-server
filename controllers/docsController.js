const { Docs } = require('../models/model')

const uploadForm = async (req, res) => {
  try {
    const createdDocument = await Docs.create(req.body.formValues)
    const id = createdDocument._id
    res.status(200).json({ uploaded: true, id })
  } catch (err) {
    res.status(400).json({ uploaded: false, error: err })
  }
}

const updateForm = async (req, res) => {
  try {
    const formValues = req.body.formValues
    await Docs.findByIdAndUpdate(formValues._id, formValues);
    res.status(200).json({ updated: true })
  } catch (err) {
    res.status(400).json({ updated: false, error: err })
  }
}

const getFormByID = async (req, res) => {
  try {
    const id = req.body.formID
    const form = await Docs.findById(id)
    if (!form) {
      res.status(404).json({ error: 'Formulario no encontrado' })
    } else {
      res.status(200).json({ form })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getClientForms = async (req, res) => {
  try {
    const forms = await Docs.find({ ncl: { $in: [null, ''] } })
    res.status(200).json({ forms })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

const getNCLForms = async (req, res) => {
  try {
    const forms = await Docs.find({ ncl: { $ne: null } })
    res.status(200).json({ forms })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

const getMedicalSignedForms = async (req, res) => {
  try {
    const forms = await Docs.find({ isMedicalSigned: { $in: true } })
    res.status(200).json({ forms })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

module.exports = { uploadForm, getClientForms, getNCLForms, getMedicalSignedForms, getFormByID, updateForm }
