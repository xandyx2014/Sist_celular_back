const express = require('express');
const router = express();
const loginCtrl = require('../controllers/login/login.controller');

router.post('/', loginCtrl.store);
router.post('/auth', loginCtrl.login);

module.exports = router;