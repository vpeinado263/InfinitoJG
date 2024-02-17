const mongoose = require('mongoose');
const { Schema } = mongoose;

const knifeSchema = new Schema({
    codigo: {
        type: Number,
        unique: true,
    },
    nombre: {
        type: String,
    },
    modelo: {
        type: String,
    },
    precio: {
        type: Number,
        required: [true, 'El campo presio es obligatorio.'],
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
        default: '' 
    },
    material: {
        type: String,
        default: '' 
    },
}, { timestamps: true });

const Knife = mongoose.model('Knife', knifeSchema);

module.exports = Knife;