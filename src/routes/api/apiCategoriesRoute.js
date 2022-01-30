const express = require('express');
const router = express.Router();
const controllerEpApiCategories = require('../../controllers/api/controllerEPApiCategories');

router.get('/api/categorieslist', controllerEpApiCategories.list);

module.exports = router;