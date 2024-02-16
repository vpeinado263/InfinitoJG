const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a la Base de Datos');
  } catch (error) {
    console.error('Error al establecer conexión a la Base de Datos:', error.message);
    throw error; // Lanzar el error para manejarlo en el inicio del servidor
  }
};

module.exports = connectDB;
