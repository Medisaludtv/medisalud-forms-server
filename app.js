const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const connectToDB = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@medisalud-forms-databas.bkiq68s.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(() => {
      console.log('Conexión exitosa a la base de datos')
    })
    .catch((error) => {
      console.error('Error al conectar a la base de datos:', error)
      connectToDB()
    })
}

connectToDB()

const port = 3000
const app = express()
app.use(bodyParser.json())

app.use(
  cors({
    origin: [
      'http://localhost:8100',
      'https://localhost:8100',
      'http://localhost',
      'https://localhost'
    ],
    methods: ['GET', 'POST', 'OPTIONS']
  })
)

const usersRouter = require('./routes/users')

app.use('/users', usersRouter)

app.listen(port, () => {
  console.log('Server listening on port', port)
})
