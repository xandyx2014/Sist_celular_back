const { DetalleFormulario, User, Formulario, Item, Categoria, Tecnico } = require('../../models/model');                        
             
function index(req, res) {
  const id = req.params.id;
  if (!id) {
    return res.status(500).json({
      ok: false,
      error: 'Debe contener informacion para crearlo'
    });
  }
  User.findAll({
    include: [
      {
      model: Formulario,
      require: true,
      paranoid: false,
      where: { id },
      include: [
        {
          model: DetalleFormulario,
          require: true,
          paranoid: false,
          include: [
            {
              model: Item,
              require: true,
              include: [{
                model: Categoria,
                paranoid: false,
                require: true
              }]
            }
          ]
        },
        {
          model: Tecnico,
          require: true
        }
      ]
      }
    ]
  })
  .then( resp => {
    return res.status(200).json({
      ok: true,
      data: resp
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
  DetalleFormulario.create({
    ...body
  }).then( detalleFormulario => {
    return res.status(200).json({
      ok: true,
      data: detalleFormulario
    });
  });
}
                           
function show(req, res) {
  DetalleFormulario.findAll({
    paranoid: false
  })
      .then(detalleFormulario => {
        return res.status(200).json({
          ok: true,
          data: detalleFormulario
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
  DetalleFormulario.destroy({
    where: { id: id }
  })
    .then( detalleFormulario => {
    res.status(200).json({
      ok: true,
      data: detalleFormulario
    });
  });;
}
                           
function update(req, res) {
  const body = req.body;
  DetalleFormulario.update({...body}, {where: {id : req.params.id }})
  .then( detalleFormulario => {
    DetalleFormulario.findByPk(req.params.id)
      .then( detalleFormulario => {
      res.status(200).json({
        ok: true,
        data: detalleFormulario
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