const { profile } = require('console');
const path = require('path');

module.exports = {
  login: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/login'));
  },

  register: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/register'));
  },

  create: (req, res) => {
    let usuario = {
      nombre: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image,
    };
    res.redirect('/users/list');
  },
};
