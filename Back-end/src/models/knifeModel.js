const mongoose = require('mongoose');
const { Schema } = mongoose;

const knifeSchema = new Schema({
    codigo: {
        type: Number,
    },
    nombre: {
        type: String,
    },
    modelo: {
        type: String,
    },
    precio: {
        type: Number,
        required: true,
    },
    medidas: {
        valor: {
            type: Number,
            required: true,
        },
        unidad: {
            type: String,
            enum: ['pulgadas' , 'cm'],
            required: true,
        },
    },
    descripcion: {
        type: String,
    },
    material: {
        type: String,
    },
}, {timestamps: true});

const Knife = mongoose.model('Knife', knifeSchema);

module.exports = Knife;