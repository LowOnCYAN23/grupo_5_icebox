<<<<<<< HEAD
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
=======
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
>>>>>>> 89a8a777c8de1a2ec7a0b6cf14554ac4b4aad282
