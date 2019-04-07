const { Formulario } = require('../../models/model');                        
                           
function index(req, res) {
  const id = req.params.id;
  if (!id) {
    return res.status(500).json({
      ok: false,
      error: 'Debe contener informacion para crearlo'
    });
  }
  Formulario.findAll({
    where: {id: id}
  })
    .then( formulario => {
    res.status(200).json({
      ok: true,
      data: formulario
    });
  });
}
                           
function store(req, res) {
  const body = req.body;
  if (Object.entries(body).length === 0) {
    return res.status(500).json({
      ok: false,
      error: 'Debe contener informacion para crearlo'
    });
  }
  Formulario.create({
    ...body
  }).then( formulario => {
    return res.status(200).json({
      ok: true,
      data: formulario
    });
  });
}
                           
function show(req, res) {
  Formulario.findAll({
    paranoid: false
  })
  .then(formulario => {
        return res.status(200).json({
          ok: true,
          data: formulario
        });
      });
}
                           
function destroy(req, res) {
  const id = req.params.id;
  if (!id) {
    return res.status(500).json({
      ok: false,
      error: 'Debe contener informacion para crearlo'
    });
  }
  Formulario.destroy({
    where: { id: id }
  })
    .then( formulario => {
    res.status(200).json({
      ok: true,
      data: formulario
    });
  });;
}
                           
function update(req, res) {
  const body = req.body;
  Formulario.update({...body}, {where: {id : req.params.id }})
  .then( formulario => {
    Formulario.findByPk(req.params.id)
      .then( formulario => {
      res.status(200).json({
        ok: true,
        data: formulario
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