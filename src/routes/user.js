const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const registerValidations = require('../middlewares/validateRegisterMiddleware');
const loginValidations = require('../middlewares/validateLoginMiddleware');

//Registro usuario
router.get('/register', userController.register);
router.post(
  '/register',
  uploadFile.single('image'),
  registerValidations,
  userController.create
);

//Login usuario
router.get('/login', userController.login);
router.post('/login', loginValidations, userController.loginProcess);

//Lista de usuarios
router.get('/usersInDB', userController.list);

//Editar usuario
router.get('/edit/:id', userController.edit);
router.post(
  '/edit/:id',
  uploadFile.single('image'),
  registerValidations,
  userController.update
);

module.exports = router;
