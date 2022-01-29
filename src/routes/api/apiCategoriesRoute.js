const express = require('express');
const router = express.Router();
const controllerEpApiCategories = require('../../controllers/api/controllerEPApiCategories');

router.get('/api/categories', controllerEpApiCategories.list);

module.exports = router;