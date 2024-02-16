const { body } = require('express-validator');

const validateCreateUser = [
    body('username').notEmpty().isString(),
    body('email').notEmpty().isEmail(),
    body('password').notEmpty().isLength({ min: 6 }),
];

const validateUpdateUser = [
    body('username').optional().isString(),
    body('email').optional().isEmail(),
    body('password').optional().isLength({ min: 6 }),
];

module.exports = {
    validateCreateUser,
    validateUpdateUser,
};
