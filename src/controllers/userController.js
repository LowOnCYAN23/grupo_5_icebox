const path = require('path');
const db = require('../database/models/index');
const User = db.User
const multerMiddleware = require('../middlewares/multerMiddleware')

//INTENTO DE USAR ASYNC AWAY
const userController = {
  register: async (req, res) => {
    try {
      (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/register'));
      }
    } catch (error) {
        return res.send(error)
    }
  },
  create: async (req, res) => {
    try {
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        image: req.body.image,
      });
      return res.render(
        path.resolve(__dirname,/* multerMiddleware,*/'../views/users/profile')
      );
    } catch (error) {
        return res.send(error)
    }
  }
}

module.exports = userController;
/*
module.exports = {
  login: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/login'));
  },

  list: (req, res) => {
    User.then((user) => {
      res.render('../views/profile', { users: users });
    });
  },

  create: (req, res) => {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image,
    });
    return res.render(
      path.resolve(__dirname,/* multerMiddleware,*/ /*'../views/users/profile')
    );
  },

  update: (req, res) => {
    User.update(
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
    User.destroy({
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
*/