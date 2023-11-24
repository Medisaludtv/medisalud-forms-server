const { Docs } = require('../models/model')


const uploadForm = async (req, res) => {
console.log(req.body);
await Docs.create(req.body)
.then((property) => res.status(200).json({uploaded: true}))
.catch(err => res.status(400).json({uploaded: false, error: err}))
}

module.exports = { uploadForm }
