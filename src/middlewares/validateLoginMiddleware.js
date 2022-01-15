const { body } = require('express-validator');

const loginValidations = [
  body('email')
    .notEmpty()
    .withMessage('Tienes que escribir un correo electrónico')
    .bail()
    .isEmail()
    .withMessage('Debes escribir un correo electrónico válido'),
  body('password')
    .isLength({ min: 8 })
    .notEmpty()
    .withMessage('Tienes que escribir una contraseña con mínimo 8 caracteres'),
];

module.exports = loginValidations;
