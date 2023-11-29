const { Docs } = require('../models/model')

const uploadForm = async (req, res) => {
  await Docs.create(req.body)
    .then((resp) => res.status(200).json({ uploaded: true }))
    .catch(err => res.status(400).json({ uploaded: false, error: err }))
}
const uploadDoc = async (req, res) => {
  console.log(req.body)
}

module.exports = { uploadForm, uploadDoc }
