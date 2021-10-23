const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.admon);
router.post('/', productController.createProduct);

router.get('/editar/:idProduct', productController.editProduct);
router.put('/actualizar/:idProduct', productController.upgradeProduct);

module.exports = router;
