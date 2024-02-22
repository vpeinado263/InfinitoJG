const { body, validationResult } = require('express-validator');

const loginValidationRules = () => {
  return [
    body('username').notEmpty().withMessage('El nombre de usuario no puede estar vacío'),
    body('password').notEmpty().withMessage('La contraseña no puede estar vacía'),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  // Manejar los errores de validación
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  loginValidationRules,
  validate,
};
