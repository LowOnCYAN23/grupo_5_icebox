const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validations = require('../middlewares/validateRegisterMiddleware');
const uploadFile = require('../middlewares/multerMiddleware');
//const guest = require('../../middlewares/guestMiddleware');

//router.get('/', userController.list);

/*router.post(
    '/',
    uploadFile.single('image'),
    validations,
    userController.create
  );*/
router.get('/register', userController.register);
router.post('/', userController.create);
router.put('/', userController.update);
router.delete('/delete/:id', userController.delete);
router.get('/', userController.login);
module.exports = router;
