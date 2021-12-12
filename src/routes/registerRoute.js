const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const validations = require('../middlewares/validateRegisterMiddleware');//¿ACÁ NO VA REQUERIDO SOLO "validations" que ya está exportado en el mismo middleware?
const uploadFile = require('../middlewares/multerMiddleware');
const guest = require('../middlewares/guestMiddleware');

router.get('/', guest, userController.register);
router.post(
  '/',
  uploadFile.single('image'),
  validations,
  userController.processRegister
);
//router.get("/add", userController.add);  //no me funciona servidor cuando los dejo de comentar
//router.post("/add", userController.create);

module.exports = router;
