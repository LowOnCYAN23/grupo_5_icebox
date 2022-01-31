const express = require('express');
const router = express.Router();
const controllerEPApiUsers = require('../../controllers/api/controllerEPApiUsers');

router.get('/api/users/', controllerEPApiUsers.list);
router.get('/api/users/:id', controllerEPApiUsers.id);

module.exports = router;