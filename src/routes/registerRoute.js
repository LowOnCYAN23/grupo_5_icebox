const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const { body } = require('express-validator');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/profileImages');
  },
  filename: (req, file, cb) => {
    let imageName = `${Date.now()} _img${path.extname(file.originalname)}`;
    cb(null, imageName);
  },
});
const uploadFile = multer({ storage });

const userController = require('../controllers/userController');

const validations = [
  body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
  body('email')
    .notEmpty()
    .withMessage('Tienes que escribir un correo electrónico')
    .bail()
    .isEmail()
    .withMessage('Debes escribir un correo electrónico válido'),
  body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
  body('image').custom((value, { req }) => {
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

router.get('/', userController.register);
router.post(
  '/',
  uploadFile.single('image'),
  validations,
  userController.processRegister
);

router.post('/', userController.createUser);

router.get('/profile/:userid', userController.profile);

module.exports = router;
