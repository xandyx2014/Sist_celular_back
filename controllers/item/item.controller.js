const { Item } = require('../../models/model');                        
                           
function index(req, res) {
  const id = req.params.id;
  if (!id) {
    res.status(500).json({
      ok: false,
      error: 'Debe contener informacion para crearlo'
    });
  }
  Item.findAll({
    where: {id: id},
    paranoid: false
  })
    .then( item => {
    res.status(200).json({
      ok: true,
      data: item
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
  Item.create({
    ...body
  }).then( item => {
    return res.status(200).json({
      ok: true,
      data: item
    });
  });
}
                           
function show(req, res) {
  Item.findAll({
    paranoid: false
  })
  .then(item => {
        return res.status(200).json({
          ok: true,
          data: item
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
  Item.destroy({
    where: { id: id }
  })
    .then( item => {
    res.status(200).json({
      ok: true,
      data: item
    });
  });;
}
                           
function update(req, res) {
  const body = req.body;
  Item.update({...body}, {where: {id : req.params.id }})
  .then( item => {
    Item.findByPk(req.params.id)
      .then( item => {
      res.status(200).json({
        ok: true,
        data: item
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