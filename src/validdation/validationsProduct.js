const { body } = require('express-validator');

const validateCreateProduct = [
    body('title').optional().isString(),
    body('price').optional().isNumeric(),
    body('description').optional().isString(),
    body('categoryId').optional().isNumeric(),
    body('images').optional().isArray(),
];

module.exports = {validateCreateProduct}