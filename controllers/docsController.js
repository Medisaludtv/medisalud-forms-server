const { Docs } = require('../models/model')


const uploadForm = async (req, res) => {
console.log(req.body);
await Docs.create(req.body)
.then((property) => console.log(property))
.catch(err => console.log(err))
}

module.exports = { uploadForm }
