const express = require('express');
const router = express();
const ItemCtrl = require('../controllers/item/item.controller');

router.get('/', ItemCtrl.show);
router.post('/', ItemCtrl.store);
router.get('/:id', ItemCtrl.index);
router.delete('/:id', ItemCtrl.destroy);
router.put('/:id', ItemCtrl.update);

module.exports = router;