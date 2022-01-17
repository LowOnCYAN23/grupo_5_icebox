const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const registerValidations = require('../middlewares/validateRegisterMiddleware');

router.get('/', userController.login);
router.post('/', registerValidations, userController.loginProcess);

module.exports = router;
