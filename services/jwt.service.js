const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/port.config');

const createToken = (user) => {
  const payload = {
    id: user.id,
    username: user.usuario,
    iat: moment().unix(),
    exp: moment().add(30, 'days')
  };
  return jwt.encode(payload, config.get('secret'));
}
module.exports = {
  createToken
};