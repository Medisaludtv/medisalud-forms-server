const { Docs } = require('../models/model')

const uploadForm = async (req, res) => {
  try {
    const formValues = req.body.formValues;
    const ciudad = formValues.ciudad; // Suponiendo que el formulario incluye la ciudad
    const dia = formValues.fecha; // Suponiendo que el formulario incluye el día

    // Guardar el formulario en la ubicación deseada
    await Docs.updateOne(
      { ciudad: ciudad },
      { $push: { [`dias.${dia}`]: formValues } },
      { upsert: true }
    );

    res.status(200).json({ uploaded: true });
  } catch (err) {
    res.status(400).json({ uploaded: false, error: err.message || err });
  }
}

const updateForm = async (req, res) => {
  try {
    const formValues = req.body.formValues
    const id = formValues._id
    await Docs.findByIdAndUpdate(formValues._id, formValues);
    res.status(200).json({ updated: true, id })
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
    const forms = await Docs.find({ $and: [{ ncl1: { $in: [null, ''] } }, { ncl2: { $in: [null, ''] } }] })
    res.status(200).json({ forms })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

const getNCLForms = async (req, res) => {
  try {
    const forms = await Docs.find({ $and: [{ ncl1: { $ne: '' } }, { ncl2: { $ne: '' } },{ firmado_medico: { $in: false } }] })
    res.status(200).json({ forms })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

const getMedicalSignedForms = async (req, res) => {
  try {
    const forms = await Docs.find({ firmado_medico: { $in: true } })
    res.status(200).json({ forms })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

module.exports = { uploadForm, getClientForms, getNCLForms, getMedicalSignedForms, getFormByID, updateForm }
