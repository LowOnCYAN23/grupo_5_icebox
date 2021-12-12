const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const validations = require('../middlewares/validateRegisterMiddleware');//¿ACÁ NO VA REQUERIDO SOLO "validations" que ya está exportado en el mismo middleware?

const uploadFile = require('../middlewares/multerMiddleware');//lo mismo para el resto, ¿porqué se ponen las rutas si ya está exportado desde el mismo archivo?

const guest = require('../middlewares/guestMiddleware');//¿QUE FUNCIÓN CUMPLE?


router.get('/register', guest, userController.register);//cambié la ruta '/' por '../views/users/register pero no funciona'

router.post(
  '/register',//cambié la ruta '/' por '../views/users/register pero no funciona'
  uploadFile.single('image'),
  validations,
  userController.processRegister
);
//router.get("/add", userController.add);  //no me funciona servidor cuando los dejo de comentar
//router.post("/add", userController.create);

module.exports = router;
