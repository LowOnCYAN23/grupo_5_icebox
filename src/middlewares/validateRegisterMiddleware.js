const path = require('path');
const { check } = require('express-validator');
//se cambió body por check que aparentemente faltaba
const validations = [
  check('name').notEmpty().withMessage('Tienes que escribir un nombre'),

  check('email')
    .notEmpty()
    .withMessage('Tienes que escribir un correo electrónico')
    .bail()
    .isEmail()
    .withMessage('Debes escribir un correo electrónico válido'),

  check('password').notEmpty().withMessage('Tienes que escribir una contraseña'),

  check('image').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.jpeg', '.png'];

    if (!file) {
      throw new Error('Tienes que subir una imagen');
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ', '
          )}`
        );
      }
    }
    return true;
  }),
];

module.exports = validations;
