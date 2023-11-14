const express = require('express');
const mongoose = require('mongoose');

const connectToDB = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB}?retryWrites=true&w=majority`,
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
