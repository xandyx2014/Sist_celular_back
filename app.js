const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

app.use('/test', require('./routes/test.route'));
app.use('/users', require('./routes/user.route'));
app.use('/formularios', require('./routes/formulario.route'));
app.use('/categorias', require('./routes/categoria.route'));
app.use('/items', require('./routes/item.route'));
app.use('/detallesformularios', require('./routes/detalleFormulario.route'));
app.use('/recibos', require('./routes/recibo.route'));
app.use('/tecnicos', require('./routes/tecnico.route'));
app.use('/login', require('./routes/login.route'));

app.use(function(req, res, next) {
  return res.status(404).send({ message: 'Route '+ req.url + ' Not found.' });
});

/* app.use(function(err, req, res, next) {
  return res.status(500).send({ error: err });
}); */

module.exports = app;