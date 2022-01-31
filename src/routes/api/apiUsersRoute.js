const express = require('express');
const router = express.Router();
const controllerEPApiUsers = require('../../controllers/api/controllerEPApiUsers');

router.get('/api/users/list',   controllerEPApiUsers.list);
router.get('/api/users/:id',    controllerEPApiUsers.id);
router.get('/api/users/',       controllerEPApiUsers.total);

module.exports = router;