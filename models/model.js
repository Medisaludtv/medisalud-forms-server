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
    namec1: { type: String },
    surnamec1: { type: String },
    birthdayc1: { type: Date },
    marcapasosc1: { type: Boolean },
    otros_dispositivosc1: { type: Boolean },
    otros_dispositivos_texto_c1: { type: String },
    stensc1: { type: Boolean },
    infartoc1: { type: Boolean },
    anginasc1: { type: Boolean },
    otras_cardiopatiasc1: { type: Boolean },
    otras_cardiopatias_texto_c1: { type: String },
    proceso_oncologicoc1: { type: Boolean },
    epilepsiac1: { type: Boolean },
    embarazoc1: { type: Boolean },
    coagulopatiasc1: { type: Boolean },
    hemorragiasc1: { type: Boolean },
    hemorragias_texto_c1: { type: String },
    infeccionc1: { type: Boolean },
    infeccion_texto_c1: { type: String },
    dispositivo_metalicoc1: { type: Boolean },
    dispositivo_metalico_texto_c1: { type: String },
    diuc1: { type: Boolean },
  
    // Second patient
    namec2: { type: String },
    surnamec2: { type: String },
    birthdayc2: { type: Date },
    marcapasosc2: { type: Boolean },
    otros_dispositivosc2: { type: Boolean },
    otros_dispositivos_texto_c2: { type: String },
    stensc2: { type: Boolean },
    infartoc2: { type: Boolean },
    anginasc2: { type: Boolean },
    otras_cardiopatiasc2: { type: Boolean },
    otras_cardiopatias_texto_c2: { type: String },
    proceso_oncologicoc2: { type: Boolean },
    epilepsiac2: { type: Boolean },
    embarazoc2: { type: Boolean },
    coagulopatiasc2: { type: Boolean },
    hemorragiasc2: { type: Boolean },
    hemorragias_texto_c2: { type: String },
    infeccionc2: { type: Boolean },
    infeccion_texto_c2: { type: String },
    dispositivo_metalicoc2: { type: Boolean },
    dispositivo_metalico_texto_c2: { type: String },
    diuc2: { type: Boolean },  
})

const Users = mongoose.model('users', UsersSchema)
const Docs = mongoose.model('docs', DocsSchema)

module.exports = {
  Users,
  Docs
}
