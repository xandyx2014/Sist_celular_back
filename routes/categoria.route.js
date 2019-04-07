const express = require('express');
const router = express();
const CategoriaCtrl = require('../controllers/categoria/categoria.controller');

router.get('/', CategoriaCtrl.show);
router.post('/', CategoriaCtrl.store);
router.get('/:id', CategoriaCtrl.index);
router.delete('/:id', CategoriaCtrl.destroy);
router.put('/:id', CategoriaCtrl.update);

module.exports = router;