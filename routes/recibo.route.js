const express = require('express');
const router = express();
const ReciboCtrl = require('../controllers/recibo/recibo.controller');

router.get('/', ReciboCtrl.show);
router.post('/', ReciboCtrl.store);
router.get('/:id', ReciboCtrl.index);
router.delete('/:id', ReciboCtrl.destroy);
router.put('/:id', ReciboCtrl.update);

module.exports = router;