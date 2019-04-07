const { Usuarios } = require('../../models/model');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../../services/jwt.service');
function store (req, res) {
  const { usuario, password } = req.body;
  Usuarios.findAll({
    where: {
      usuario: usuario
    },
    attributes: ['id', 'usuario']
  }).then( (resp) => {
    if (resp.length === 0) {
      bcrypt.hash(password, null, null, (err, hash) => { 
        if (err) {
          return res.status(200).json({
            ok: true,
            message: 'ha ocurrido un error al crear el usuario'
          });
        } else {
          Usuarios.create({
            usuario,
            password: hash
          }).then( resp => {
            resp.password = '...';
            return res.status(200).json({
              ok: true,
              data: resp
            });
          });
        }
      });
    } else {
      return res.status(200).json({
        ok: true,
        message: 'Ya existe el usuario con ese nombre'
      });
    }
    
  });
 
}

function login(req, res) {
  const { usuario, password } = req.body;
  Usuarios.findOne({
    where: { usuario: usuario }
  }).then( resp => {
    if (resp === null) {
      return res.status(200).json({
        ok: false,
        message: 'el usuario no existe en la base de datos'
      });
    } else {
      bcrypt.compare(password, resp.password, (err, check) => {
        if (err) {
          res.status(200).json({
            ok: false,
            message: 'ha ocurrido un error'
          });
        }
        if (check) {
          return res.status(200).json({
            ok: true,
            data: resp,
            token: jwt.createToken(resp)
          });
        } else {
          return res.status(200).json({
            ok: false,
            message: 'Contraseña Incorrecta'
          });
        }
        
      });
      
    }
    
  });
}

module.exports = {
  store,
  login
}