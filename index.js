const app = require('./app');
const config = require('./config/port.config');
const sequelize = require('./database/conection.database');

  sequelize
    .authenticate()
    .then(() => {
      app.listen(config.get('port') || 3000, () => {
        console.log(`Conexion Correcta escuchando en el puerto 3000`);
      });
    })
    .catch(err => {
      sequelize.close();
    });
