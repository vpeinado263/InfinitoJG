const { body } = require('express-validator');

const validateCreateUser = [

    body('name').isString(),
    body('email').isEmail(),
    body('password').isString(),
    body('avatar').isString(), 
]

module.exports = { validateCreateUser };