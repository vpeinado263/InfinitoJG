const { body } = require('express-validator');

const validateCreateKnife = [
  body('codigo').isNumeric().withMessage('El código debe ser numérico.'),
  body('nombre').optional().isString().withMessage('El nombre debe ser una cadena.'),
  body('modelo').optional().isString().withMessage('El modelo debe ser una cadena.'),
  body('precio').optional().isNumeric().withMessage('El precio debe ser numérico.'),
  body('medidas.valor').optional().isNumeric().withMessage('El valor de las medidas debe ser numérico.'),
  body('medidas.unidad').optional().isIn(['pulgadas', 'cm']).withMessage('La unidad de medida no es válida.'),
  body('descripcion').optional().isString().withMessage('La descripción debe ser una cadena.'),
  body('material').optional().isString().withMessage('El material debe ser una cadena.'),
];

module.exports = { validateCreateKnife };
