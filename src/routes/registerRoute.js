const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const uploadFile = require('../middlewares/multerMiddleware');
const registerValidations = require('../middlewares/validateRegisterMiddleware');

router.get('/', userController.register);
router.post(
  '/',
  registerValidations,
  uploadFile.single('image'),
  userController.create
);

router.put('/', userController.update);
router.delete('/delete/:id', userController.delete);

router.get('/', userController.login);

module.exports = router;
