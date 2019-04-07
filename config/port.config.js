const express = require('express');
const app = express();

app.set('port', 3000);
app.set('secret', 'mi_clave_secreta');
module.exports = app;