const { Tecnico } = require('../../models/model');                        
                           
function index(req, res) {
  const id = req.params.id;
  if (!id) {
    res.status(500).json({
      ok: false,
      error: 'Debe contener informacion para crearlo'
    });
  }
  Tecnico.findAll({
    where: { id: id},
    paranoid: false
  })
    .then( tecnico => {
    res.status(200).json({
      ok: true,
      data: tecnico
    });
  });
}
                           
function store(req, res) {
  const body = req.body;
  if (Object.entries(body).length === 0) {
    res.status(500).json({
      ok: false,
      error: 'Debe contener informacion para crearlo'
    });
  }
  Tecnico.create({
    ...body
  }).then( tecnico => {
    return res.status(200).json({
      ok: true,
      data: tecnico
    });
  });
}
                           
function show(req, res) {
  Tecnico.findAll({
    paranoid: false
  })
      .then(tecnico => {
        return res.status(200).json({
          ok: true,
          data: tecnico
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
  Tecnico.destroy({
    where: { id: id }
  })
    .then( tecnico => {
    res.status(200).json({
      ok: true,
      data: tecnico
    });
  });;
}
                           
function update(req, res) {
  const body = req.body;
  Tecnico.update({...body}, {where: {id : req.params.id }})
  .then( tecnico => {
    Tecnico.findByPk(req.params.id)
      .then( tecnico => {
      res.status(200).json({
        ok: true,
        data: tecnico
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