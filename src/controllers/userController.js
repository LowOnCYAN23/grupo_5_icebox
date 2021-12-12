<<<<<<< HEAD
const path = require('path');
const db = require('../database/models');

module.exports = {
  login: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/login'));
  },

  list: (req, res) => {
    // acá estamos llamando a la base de datos de usuarios para que nos muestre a todos los usuarios y lo ponga en la vista de /users
    // Esa vista no se ha creado, puedes usar la vista de /products para guiarte "copiar y pegar" pero que entregue los datos de usuarios
    db.Users /*Esto ya esta con el nombre de la base de datos que queremos mostrar es decir la de usuarios*/.findAll()
      .then((list) => {
        res.render('../views/products/products', { list: list });
      });
  },

  create: (req, res) => {
    // Los nombres que van aqui son los que aparecen dentro del input del formulario en la parte de name,
    //debe decir algo como name='user' y luego pones el nombre de la columna de la tabla más los dos puntos
    //y lo de req.body."nombre del name dentro del input. Ejemplo:  name_product: req.body.name o puedes
    //mirar productController + la vista de admon.ejs en la parte de create para guiarte más sobre que nombres colocar"

    res.redirect('/products');
  },

  edit: (req, res) => {
    res.render(path.resolve(__dirname, '../views/products/admon'));
  },

  update: (req, res) => {
    res.render(path.resolve(__dirname, '../views/products/admon'));
  },

  delete: (req, res) => {
    res.render(path.resolve(__dirname, '../views/products/admon'));
  },

  detail: (req, res) => {
    res.render(path.resolve(__dirname, '../views/products/admon'));
  },

  register: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/register'));
  },
};
=======
const path = require('path');
const db = require('../database/models');

module.exports = {
  login: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/login'));
  },

  list: (req, res) => {
    // acá estamos llamando a la base de datos de usuarios para que nos muestre a todos los usuarios y lo ponga en la vista de /users
    // Esa vista no se ha creado, puedes usar la vista de /products para guiarte "copiar y pegar" pero que entregue los datos de usuarios
    db.Users /*Esto ya esta con el nombre de la base de datos que queremos mostrar es decir la de usuarios*/.findAll()
      .then((list) => {
        res.render('../views/products/products', { list: list });
      });
  },

  create: (req, res) => {
    // Los nombres que van aqui son los que aparecen dentro del input del formulario en la parte de name,
    //debe decir algo como name='user' y luego pones el nombre de la columna de la tabla más los dos puntos
    //y lo de req.body."nombre del name dentro del input. Ejemplo:  name_product: req.body.name o puedes
    //mirar productController + la vista de admon.ejs en la parte de create para guiarte más sobre que nombres colocar"

    res.redirect('/products');
  },

  edit: (req, res) => {
    res.render(path.resolve(__dirname, '../views/products/admon'));
  },

  update: (req, res) => {
    res.render(path.resolve(__dirname, '../views/products/admon'));
  },

  delete: (req, res) => {
    res.render(path.resolve(__dirname, '../views/products/admon'));
  },

  detail: (req, res) => {
    res.render(path.resolve(__dirname, '../views/products/admon'));
  },

  register: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/register'));
  },
};
>>>>>>> 89a8a777c8de1a2ec7a0b6cf14554ac4b4aad282
