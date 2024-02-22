const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL );
    console.log('Conexión exitosa a la Base de Datos');
  } catch (error) {
    console.error('Error al establecer conexión a la Base de Datos:', error.message);
    throw error; 
  }
};

module.exports = connectDB;
