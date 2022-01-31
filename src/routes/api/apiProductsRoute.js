const express = require('express');
const router = express.Router();
const controllerEpApiProducts = require('../../controllers/api/controllerEPApiProducts');

router.get('/api/products/', controllerEpApiProducts.list);
router.get('/api/products/:id', controllerEpApiProducts.id);

module.exports = router;