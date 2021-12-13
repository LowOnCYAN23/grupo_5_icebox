const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.admon);
router.post('/', productController.create);

router.get('/products', productController.list);

router.get('/edit/:id', productController.edit);
router.post('/edit/:id', productController.update);

router.get('/delete/:id', productController.delete);

module.exports = router;
