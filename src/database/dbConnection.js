const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Conexión Exitosa a la Base de Datos ');
  } catch (error) {
    console.log('Error al Establecer Conexión a Base de Datos MongoDB', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
