const express = require('express');
const router = express();
const FormularioCtrl = require('../controllers/formulario/formulario.controller');

router.get('/', FormularioCtrl.show);
router.post('/', FormularioCtrl.store);
router.get('/:id', FormularioCtrl.index);
router.delete('/:id', FormularioCtrl.destroy);
router.put('/:id', FormularioCtrl.update);

module.exports = router;