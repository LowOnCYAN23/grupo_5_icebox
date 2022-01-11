const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


//router.get('/', userController.list);
router.get('/', userController.register);
router.post('/', userController.create);
router.put('/', userController.update);
router.delete('/delete/:id', userController.delete);
router.get('/', userController.login);
module.exports = router;
