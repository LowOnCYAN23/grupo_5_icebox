const path = require('path');
const db = require('../database/models');

module.exports = {
  login: (req, res) => {
   res.render(path.resolve(__dirname, '../views/users/login'))
    
  },

  /*list: (req, res) => {
    // acá estamos llamando a la base de datos de usuarios para que nos muestre a todos los usuarios y lo ponga en la vista de /users
    // Esa vista no se ha creado, puedes usar la vista de /products para guiarte "copiar y pegar" pero que entregue los datos de usuarios
    db.Users /*Esto ya esta con el nombre de la base de datos que queremos mostrar es decir la de usuarios /.findAll()
      .then((users) => {
        res.render('../views/profile', { users: users });
      });
  },*/
// Los nombres que van aqui son los que aparecen dentro del input del formulario en la parte de name,
    //debe decir algo como name='user' y luego pones el nombre de la columna de la tabla más los dos puntos
    //y lo de req.body."nombre del name dentro del input. Ejemplo:  name_product: req.body.name o puedes
    //mirar productController + la vista de admon.ejs en la parte de create para guiarte más sobre que nombres colocar"
  create: (req, res) => {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image
    })
    return res.render(path.resolve(__dirname, '../web/index'));
    
    },

  update: (req, res) => {
    db.User.update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image
    })
      return res.render(path.resolve(__dirname, '../views/users/profile'));
  },

  delete: (req, res) => {
    db.User.destroy({
      email: req.body.email
    })
    res.render(path.resolve(__dirname, '../views/users/register'));
  },

  register: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/register'));
  },
};
