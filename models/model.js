const Sequelize = require('sequelize');
const sequelize = require('../database/conection.database');

const User = sequelize.define('Cliente', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  direccion: {
    type: Sequelize.STRING
  },
  telefono : {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  correo: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
}, {
  paranoid: true
});
const Usuarios = sequelize.define('Usuario', {
  usuario: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  paranoid: true
});
const Tecnico = sequelize.define('Tecnico', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  direccion: {
    type: Sequelize.STRING
  },
  telefono : {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  correo: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
}, {
  paranoid: true
});
const Recibo = sequelize.define('Recibo', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  formaDePago: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  garantia: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
}, {
  paranoid: true
});

const Item = sequelize.define('Item', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  marca: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  modelo: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
}, {
  paranoid: true
});

const DetalleFormulario = sequelize.define('DetallesFormulario', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: Sequelize.STRING,
  },
  precioTotal: {
    type: Sequelize.STRING,
    validate: {
      min: { args: 1, msg: 'No se permite valoes minimos de cero'}
    }
  }
}, {
  paranoid: true
});
const Categoria = sequelize.define('Categoria', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Nombre: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  Descripcion: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
}, {
  paranoid: true
});
const Formulario = sequelize.define('Formulario', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fechaPedido: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  fechaEntrega: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
}, {
  paranoid: true
});
User.hasMany(Formulario, { foreignKey: 'cliente_id', allowNull: false });
Formulario.belongsTo(User, { foreignKey: 'cliente_id'});




Formulario.hasMany(DetalleFormulario, { foreignKey: 'detalleFormulario_id', allowNull: false });
DetalleFormulario.belongsTo(Formulario, { foreignKey: 'detalleFormulario_id' });

Formulario.hasMany(Recibo, { foreignKey: 'recibo_id', allowNull: false });
Recibo.belongsTo(Formulario, { foreignKey: 'recibo_id'});

Tecnico.hasMany(Formulario, { foreignKey: 'tecnico_id' , allowNull: false } );
Formulario.belongsTo(Tecnico, { foreignKey: 'tecnico_id'});

Categoria.hasMany(Item, { foreignKey: 'categoria_id', allowNull: false });
Item.belongsTo(Categoria, { foreignKey: 'categoria_id' });

Item.hasMany(DetalleFormulario, { foreignKey: 'item_id', allowNull: false });
DetalleFormulario.belongsTo(Item, { foreignKey: 'item_id' });


module.exports = {
  User,
  Tecnico,
  Categoria,
  Item,
  DetalleFormulario,
  Recibo,
  Formulario,
  Usuarios
};