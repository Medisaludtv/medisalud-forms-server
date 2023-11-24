const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require("jsonwebtoken");
require('dotenv').config()
const connectToDB = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@medisalud-forms-databas.bkiq68s.mongodb.net/medisalud-forms-db?retryWrites=true&w=majority`,
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

export function verifyToken(req, res, next) {
  //Obtenemos el header de auth: Bearer token
  const authorizationHeader = req.headers.authorization;
  //Si no existe o si no empieza con Bearer, devolvemos error 401
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    res.status(401).send("Unauthorized request");
    return;
  }
  //Si esta todo ok, obtenemos el token eliminando el Bearer y lo guardamos en una variable
  const token = authorizationHeader.substring(7); // Eliminar "Bearer " del encabezado
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.userId;
    req.isAdmin = payload.isAdmin;
    next();
  } catch (error) {
    res.status(401).send("Invalid token");
  }
}

const usersRouter = require('./routes/users')
const docsRouter = require('./routes/docs')

app.use('/users', usersRouter)
app.use('/docs', docsRouter)

app.listen(port, () => {
  console.log('Server listening on portt', port)
})
