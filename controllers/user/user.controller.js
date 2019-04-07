const { User } = require('../../models/model');                     
                           
function index(req, res) {
  const id = req.params.id;
  if (!id) {
    res.status(500).json({
      ok: false,
      error: 'Debe contener informacion para crearlo'
    });
  }
  User.findAll({
    where: {id: id},
    paranoid: false
  })
    .then( user => {
    res.status(200).json({
      ok: true,
      data: user
    });
  });
}
                           
function store(req, res) {
  console.log(req.body);
  const body = req.body;
  if (Object.entries(body).length === 0) {
    return res.status(500).json({
      ok: false,
      error: 'Debe contener informacion para crearlo'
    });
  }
  User.create({
    ...body
  }).then( user => {
    return res.status(200).json({
      ok: true,
      data: user
    });
  });
}
                           
function show(req, res) {
  User.findAll({
    paranoid: false
  })
      .then(users => {
        return res.status(200).json({
          ok: true,
          data: users
        });
      });
}
                           
function destroy(req, res) {
  const id = req.params.id;
  if (!id) {
    res.status(500).json({
      ok: false,
      error: 'Debe contener informacion para crearlo'
    });
  }
  User.destroy({
    where: { id: id }
  })
    .then( user => {
    res.status(200).json({
      ok: true,
      data: user
    });
  });;
}
                           
function update(req, res) {
  const body = req.body;
  User.update({...body}, {where: {id : req.params.id }})
  .then( user => {
    User.findByPk(req.params.id)
    .then( user => {
    res.status(200).json({
      ok: true,
      data: user
      });
    });   
  });
}
                            
module.exports = {
  index,
  store,
  show, 
  destroy,
  update, 
};