const path = require('path');
const { body } = require('express-validator');

const registerValidations = [
  body('name').notEmpty().withMessage('Tienes que escribir un nombre completo'),
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

  body('image').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

    if (!file) {
      throw new Error('Tienes que subir una imagen de perfil');
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

module.exports = registerValidations;
