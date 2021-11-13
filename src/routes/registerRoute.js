const express = require('express');
const router = express.Router();

// Controller
const userController = require('../controllers/userController');

// Middleware
const uploadFile = require('../middlewares/')

// Formulario de registro
router.get('/', userController.register);

// Procesar el registro
router.post('/', userController.create);

module.exports = router;
