const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const validations = require('../middlewares/validateRegisterMiddleware');
const uploadFile = require('../middlewares/multerMiddleware');
const guest = require('../middlewares/guestMiddleware');

router.get('/', guest, userController.register);
router.post(
  '/',
  uploadFile.single('image'),
  validations,
  userController.processRegister
);

module.exports = router;
