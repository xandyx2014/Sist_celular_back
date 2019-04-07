const Model = require('../../models/model');
const Migrations = async function () {
  await Model.User.sync({ force: true });
  await Model.Tecnico.sync({ force: true });
  await Model.Formulario.sync({ force: true });
  await Model.Recibo.sync({ force: true });
  await Model.Categoria.sync({ force: true });
  await Model.Item.sync({ force: true });
  await Model.DetalleFormulario.sync({ force: true });
  await Model.Usuarios.sync({ force: true });
};
Migrations();