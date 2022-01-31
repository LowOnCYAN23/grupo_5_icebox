const express = require('express');
const router = express.Router();
const controllerEpApiProducts = require('../../controllers/api/controllerEPApiProducts');

router.get('/api/products/list',    controllerEpApiProducts.list);
router.get('/api/products/:id',     controllerEpApiProducts.id);
router.get('/api/products/',        controllerEpApiProducts.total);

module.exports = router;