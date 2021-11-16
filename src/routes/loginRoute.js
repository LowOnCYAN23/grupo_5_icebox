const express = require('express');
const router = express.Router();
const loginValidations = require('../../middlewares/validateLoginMiddleware');
const guest = require('../../middlewares/guestMiddleware');
const userController = require('../controllers/userController');

router.get('/', guest, userController.login);
router.post('/', loginValidations, userController.processLogin);

module.exports = router;
