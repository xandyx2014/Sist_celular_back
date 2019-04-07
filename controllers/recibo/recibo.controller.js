const {
  Recibo,
  DetalleFormulario,
  User,
  Formulario,
  Item,
  Categoria,
  Tecnico
} = require('../../models/model');
const fs = require('fs');
const pdf = require('dynamic-html-pdf');
const options = {
  format: "A3",
  orientation: "portrait",
  border: "10mm"
};

function index(req, res) {

  const id = req.params.id;
  if (!id) {
    return res.status(500).json({
      ok: false,
      error: 'Debe contener informacion para crearlo'
    });
  }
  User.findAll({
      include: [{
        model: Formulario,
        paranoid: false,
        require: true,
        where: {
          id
        },
        include: [{
            model: DetalleFormulario,
            require: true,
            paranoid: false,
            include: [{
              model: Item,
              require: true,
              include: [{
                model: Categoria,
                paranoid: false,
                require: true
              }]
            }]
          },
          {
            model: Tecnico,
            require: true
          }
        ]
      }]
    })
    .then(data => {
      if (data.length > 0) {
        const html = fs.readFileSync(__dirname + '/recibo.html', 'utf8');
        const document = {
          type: 'file', // 'file' or 'buffer'
          template: html,
          context: {
            data,
            tecnico: data[0].Formularios[0].Tecnico,
            detalle: data[0].Formularios[0].DetallesFormularios,
            total: Object.keys(data[0].Formularios[0].DetallesFormularios).reduce((previus, key) => {
              if (data[0].Formularios[0].DetallesFormularios[key].deletedAt === null) {
                  return previus + Number(data[0].Formularios[0].DetallesFormularios[key].precioTotal);
               } else {
                   return previus + 0;
                  }
              
            }, 0)
          },
          path: `./recibo.pdf` // it is not required if type is buffer
        };

        pdf.create(document, options)
          .then(function (resPdf) {
            return res.download(resPdf.filename, `recibo.pdf`, function (err) {
              fs.unlinkSync(resPdf.filename);
            });
          })
          .catch(error => {
            console.error(error)
            return;
          });
      } else {
        return res.status(404).json({
          ok: false,
          error: 'El formulario no existe'
        })
      }
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
  Recibo.create({
    ...body
  }).then(recibo => {
    return res.status(200).json({
      ok: true,
      data: recibo
    });
  });
}

function show(req, res) {
  Recibo.findAll({
    paranoid: false
  })
    .then(recibo => {
      return res.status(200).json({
        ok: true,
        data: recibo
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
  Recibo.destroy({
      where: {
        id: id
      }
    })
    .then(recibo => {
      res.status(200).json({
        ok: true,
        data: recibo
      });
    });;
}

function update(req, res) {
  const body = req.body;
  Recibo.update({
      ...body
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(recibo => {
      Recibo.findByPk(req.params.id)
        .then(recibo => {
          res.status(200).json({
            ok: true,
            data: recibo
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