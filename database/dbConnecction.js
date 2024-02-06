const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Conexión exitosa a Base de Datos');
    } catch (error) {
        console.log('Error al establecer conexión con la Base de Datos', error.message);
    }
};

module.exports = connectDB;