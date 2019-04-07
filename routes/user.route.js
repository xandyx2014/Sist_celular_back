const express = require('express');
const router = express();
const UserCtrl = require('../controllers/user/user.controller');

router.get('/', UserCtrl.show);
router.post('/', UserCtrl.store);
router.get('/:id', UserCtrl.index);
router.delete('/:id', UserCtrl.destroy);
router.put('/:id', UserCtrl.update);

module.exports = router;