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

//Detalle de usuarios
router.get('/userDetails/:id', userController.userDetails);

//Perfil de usuario
router.get('/profile', userController.profile);

//Editar usuario
router.get('/edit/:id', userController.edit);
router.post(
  '/edit/:id',
  registerValidations,
  uploadFile.single('image'),
  userController.update
);

//Eliminar usuario
router.post('/delete/:id', userController.delete);

module.exports = router;
