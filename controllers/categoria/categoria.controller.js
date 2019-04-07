const { Categoria } = require('../../models/model');                        
                           
function index(req, res) {
  const id = req.params.id;
  if (!id) {
    res.status(500).json({
      ok: false,
      error: 'Debe contener informacion para crearlo'
    });
  }
  Categoria.findAll({
    where: {id: id},
    paranoid: false
  })
    .then( categoria => {
    res.status(200).json({
      ok: true,
      data: categoria
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
  Categoria.create({
    ...body
  }).then( categoria => {
    return res.status(200).json({
      ok: true,
      data: categoria
    });
  });
}
                           
function show(req, res) {
  Categoria.findAll({
    paranoid: false
  })
      .then(categoria => {
        return res.status(200).json({
          ok: true,
          data: categoria
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
  Categoria.destroy({
    where: { id: id }
  })
    .then( categoria => {
    res.status(200).json({
      ok: true,
      data: categoria
    });
  });;
}
                           
function update(req, res) {
  const body = req.body;
  Categoria.update({...body}, {where: {id : req.params.id }})
  .then( categoria => {
    Categoria.findByPk(req.params.id)
      .then( categoria => {
      res.status(200).json({
        ok: true,
        data: categoria
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