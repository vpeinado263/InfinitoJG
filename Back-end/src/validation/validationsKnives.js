const { body } = require('express-validator');

const validateCreateKnife = [
  body('codigo').isNumeric().withMessage(),
  body('nombre').optional().isString().withMessage(),
  body('modelo').optional().isString().withMessage(),
  body('precio').optional().isNumeric().withMessage(),
  body('medidas.valor').optional().isNumeric().withMessage(),
  body('medidas.unidad').optional().isIn(['pulgadas', 'cm']).withMessage(),
  body('descripcion').optional().isString().withMessage(),
  body('material').optional().isString().withMessage(),
];

module.exports = { validateCreateKnife };
