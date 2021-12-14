const path = require('path');
const db = require('../database/models');

module.exports = {
  login: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/login'));
  },

  list: (req, res) => {
    db.Users.then((users) => {
      res.render('../views/profile', { users: users });
    });
  },

  create: (req, res) => {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image,
    });
    return res.render(
      path.resolve(__dirname, multerMiddleware, '../views/users/profile')
    );
  },

  update: (req, res) => {
    db.User.update(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        image: req.body.image,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.render(path.resolve(__dirname, '../views/users/profile'));
  },

  delete: (req, res) => {
    db.Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect('/products');
  },

  register: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/register'));
  },
};
