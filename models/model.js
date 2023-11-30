const mongoose = require('mongoose')

const UsersSchema = mongoose.Schema(
  {
    _id: {
      type: String
    },
    name: {
      type: String
    },
    surname: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    phone: {
      type: Number
    },
    userLevel: {
      type: Number
    }
  }
)

const DocsSchema = new mongoose.Schema({
  // First patient
  namec1: { type: String, required: true },
  surnamec1: { type: String, required: true },
  birthdayc1: { type: Date, required: true },
  marcapasosc1: { type: Boolean, default: false },
  otros_dispositivosc1: { type: Boolean, default: false },
  otros_dispositivos_texto_c1: { type: String, default: '' },
  stensc1: { type: Boolean, default: false },
  infartoc1: { type: Boolean, default: false },
  anginasc1: { type: Boolean, default: false },
  otras_cardiopatiasc1: { type: Boolean, default: false },
  otras_cardiopatias_texto_c1: { type: String, default: '' },
  proceso_oncologicoc1: { type: Boolean, default: false },
  epilepsiac1: { type: Boolean, default: false },
  embarazoc1: { type: Boolean, default: false },
  coagulopatiasc1: { type: Boolean, default: false },
  hemorragiasc1: { type: Boolean, default: false },
  hemorragias_texto_c1: { type: String, default: '' },
  infeccionc1: { type: Boolean, default: false },
  infeccion_texto_c1: { type: String, default: '' },
  dispositivo_metalicoc1: { type: Boolean, default: false },
  dispositivo_metalico_texto_c1: { type: String, default: '' },
  diuc1: { type: Boolean, default: false },

  // Second patient
  namec2: { type: String, required: true },
  surnamec2: { type: String, required: true },
  birthdayc2: { type: Date, required: true },
  marcapasosc2: { type: Boolean, default: false },
  otros_dispositivosc2: { type: Boolean, default: false },
  otros_dispositivos_texto_c2: { type: String, default: '' },
  stensc2: { type: Boolean, default: false },
  infartoc2: { type: Boolean, default: false },
  anginasc2: { type: Boolean, default: false },
  otras_cardiopatiasc2: { type: Boolean, default: false },
  otras_cardiopatias_texto_c2: { type: String, default: '' },
  proceso_oncologicoc2: { type: Boolean, default: false },
  epilepsiac2: { type: Boolean, default: false },
  embarazoc2: { type: Boolean, default: false },
  coagulopatiasc2: { type: Boolean, default: false },
  hemorragiasc2: { type: Boolean, default: false },
  hemorragias_texto_c2: { type: String, default: '' },
  infeccionc2: { type: Boolean, default: false },
  infeccion_texto_c2: { type: String, default: '' },
  dispositivo_metalicoc2: { type: Boolean, default: false },
  dispositivo_metalico_texto_c2: { type: String, default: '' },
  diuc2: { type: Boolean, default: false },
})

const Users = mongoose.model('users', UsersSchema)
const Docs = mongoose.model('docs', DocsSchema)

module.exports = {
  Users,
  Docs
}
