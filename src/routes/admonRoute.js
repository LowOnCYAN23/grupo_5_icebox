const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.admon);

router.get('/editar/:idProduct', productController.editProduct);
router.put('/actualizar/:idProduct', productController.upgradeProduct);

router.get('/products', productController.list);
router.post('/products', productController.createProduct);

module.exports = router;
