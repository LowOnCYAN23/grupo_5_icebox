const { body } = require('express-validator');

const loginValidations = [
  body('email')
    .notEmpty()
    .withMessage('Tienes que escribir un correo electrónico')
    .bail()
    .isEmail()
    .withMessage('Debes escribir un correo electrónico válido'),

  body('password')
    .notEmpty()
    .withMessage('Tienes que escribir una contraseña')
    .bail()
    .isLength({ min: 8 })
    .withMessage('La contraseña debe ser minimo de 8 caracteres'),
];

module.exports = loginValidations;
