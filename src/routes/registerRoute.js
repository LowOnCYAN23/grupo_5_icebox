const express = require('express');
const router = express.Router();

// Controller
const userController = require('../controllers/userController');

<<<<<<< HEAD
router.get('/register', userController.register);

=======
// Middleware
const uploadFile = require('../middlewares/')

// Formulario de registro
router.get('/', userController.register);

// Procesar el registro
>>>>>>> 5a2e5a593217d93d418dfa5e9663ae65d029f697
router.post('/', userController.create);

router.get('/profile/:userid', userController.profile);

module.exports = router;
