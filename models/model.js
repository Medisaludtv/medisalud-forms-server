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

const DocsSchema = mongoose.Schema(
  {
    anginas: {
      type: Boolean,
      default: false
    },
    apto: {
      type: Boolean,
      default: true
    },
    birthday: {
      type: Date,
      default: Date.now
    },
    coagulopatias: {
      type: Boolean,
      default: false
    },
    dispositivo_metalico: {
      type: Boolean,
      default: false
    },
    dispositivo_metalico_texto: {
      type: String,
      default: ""
    },
    diu: {
      type: Boolean,
      default: false
    },
    embarazo: {
      type: Boolean,
      default: false
    },
    epilepsia: {
      type: Boolean,
      default: false
    },
    hemorragias: {
      type: Boolean,
      default: false
    },
    hemorragias_texto: {
      type: String,
      default: ""
    },
    infarto: {
      type: Boolean,
      default: false
    },
    infeccion: {
      type: Boolean,
      default: false
    },
    infeccion_texto: {
      type: String,
      default: ""
    },
    libre_enfermedad: {
      type: String,
      default: "false"
    },
    marcapasos: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: "Alberto"
    },
    otras_cardiopatias: {
      type: Boolean,
      default: false
    },
    otras_cardiopatias_texto: {
      type: String,
      default: ""
    },
    otros_dispositivos: {
      type: Boolean,
      default: false
    },
    otros_dispositivos_texto: {
      type: String,
      default: ""
    },
    proceso_oncologico: {
      type: Boolean,
      default: false
    },
    proceso_oncologico_texto: {
      type: String,
      default: ""
    },
    stens: {
      type: Boolean,
      default: false
    },
    surname: {
      type: String,
      default: "Moreno"
    }
  }
)

const Users = mongoose.model('users', UsersSchema)
const Docs = mongoose.model('docs', DocsSchema)

module.exports = { 
  Users,
  Docs
}
