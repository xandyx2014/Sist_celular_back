const express = require('express');
const router = express();
const DetalleFormCtrl = require('../controllers/detalleFormulario/detalleFormulario.controller');

router.get('/', DetalleFormCtrl.show);
router.post('/', DetalleFormCtrl.store);
router.get('/:id', DetalleFormCtrl.index);
router.delete('/:id', DetalleFormCtrl.destroy);
router.put('/:id', DetalleFormCtrl.update);

module.exports = router;