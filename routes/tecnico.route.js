const express = require('express');
const router = express();
const TecnicoCtrl = require('../controllers/tecnico/tecnico.controller');

router.get('/', TecnicoCtrl.show);
router.post('/', TecnicoCtrl.store);
router.get('/:id', TecnicoCtrl.index);
router.delete('/:id', TecnicoCtrl.destroy);
router.put('/:id', TecnicoCtrl.update);

module.exports = router;