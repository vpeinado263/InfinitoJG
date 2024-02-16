const { body } = require('express-validator');

const validateCreateKnife = [
  body('codigo').optional().isNumeric().withMessage('El código debe ser un número.'),
  body('nombre').optional().isString().withMessage('El nombre debe ser una cadena de texto.'),
  body('modelo').optional().isString().withMessage('El modelo debe ser una cadena de texto.'),
  body('precio').optional().isNumeric().withMessage('El precio debe ser un número.'),
  body('medidas.valor').optional().isNumeric().withMessage('El valor de las medidas debe ser un número.'),
  body('medidas.unidad').optional().isIn(['pulgadas', 'cm']).withMessage('La unidad de medida no es válida.'),
  body('descripcion').optional().isString().withMessage('La descripción debe ser una cadena de texto.'),
  body('material').optional().isString().withMessage('El material debe ser una cadena de texto.'),
];

module.exports = { validateCreateKnife };
