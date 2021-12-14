const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.admon);
router.post('/', productController.create);

router.get('/', productController.list);

router.get('/:id_product', productController.detail);

router.get('/:id_product', productController.edit);
router.post('/:id_product', productController.update);

router.get('/delete/:id', productController.delete);

module.exports = router;
