const { Docs } = require('../models/model')
const jwt = require("jsonwebtoken");


const uploadForm = async (req, res) => {
await Docs.create(req.body);
}

module.exports = { uploadForm }
