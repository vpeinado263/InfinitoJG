const { body } = require('express-validator');

const validateCreateKnife = [
  
  body('nombre').optional().isString(),
  body('precio').optional().isNumeric(),
  body('material').optional().isString(),
  body('descripcion').optional().isString(),
  body('disponible').optional().isBoolean(),
];

module.exports = { validateCreateKnife };
