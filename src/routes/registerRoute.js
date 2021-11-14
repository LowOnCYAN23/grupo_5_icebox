const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const validations = require('../../middlewares/validateRegisterMiddleware');
const uploadFile = require('../../middlewares/multerMiddleware');

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
