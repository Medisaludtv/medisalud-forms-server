const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const connectToDB = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@medisalud-forms-databas.bkiq68s.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Conexión exitosa a la base de datos");
    })
    .catch((error) => {
      console.error("Error al conectar a la base de datos:", error);
      connectToDB()
    });
}

connectToDB();

const port = 3000;
const app = express();

app.listen(port, () => {
  console.log("Server listening on port", port)
});