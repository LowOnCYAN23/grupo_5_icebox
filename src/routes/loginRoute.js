const express = require('express');
const router = express.Router();
const loginValidations = require('../../middlewares/validateLoginMiddleware');
const userController = require('../controllers/userController');

router.get('/', userController.login);
router.post('/', loginValidations, userController.processLogin);

module.exports = router;
