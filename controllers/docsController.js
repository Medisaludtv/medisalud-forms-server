const { Docs } = require('../models/model')

const uploadForm = async (req, res) => {
  try {
    const createdDocument = await Docs.create(req.body);
    const _id = createdDocument._id;

    res.status(200).json({ uploaded: true, _id });
  } catch (err) {
    res.status(400).json({ uploaded: false, error: err });
  }
};
const uploadDoc = async (req, res) => {
  console.log(req.body)
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

module.exports = { uploadForm, uploadDoc, getClientForms, getNCLForms, getMedicalSignedForms }
