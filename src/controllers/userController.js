const path = require('path');
const db = require('../database/models');
const { validationResult } = require('express-validator');

module.exports = {
  login: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/login'));
  },

  register: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/register'));
  },

  create: (req, res) => {
    db.Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image,
    })

      .then((user) => {
        res.render('../views/users/profile', { user: user });
      })
      .catch((error) => res.send(error));
  },

  registerNewUser: (req, res) => {
    let resultValidation = validationResult(req);
    if (resultValidation.errors.lenght < 0) {
      db.Users.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        image: req.body.image,
      }).then(() => {
        return res.render(
          path.resolve(__dirname, multerMiddleware, '../views/users/profile')
        );
      });
    } else {
      return res.render(path.resolve(__dirname, '../views/users/register'), {
        errores: resultValidation.errors,
      });
    }
  },

  update: (req, res) => {
    db.Users.update(
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

  logout: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/register'));
  },
  userProfile: (req, res) => {
    console.log(req.cookies.userEmail);
    return res.render(path.resolve(__dirname, '../views/users/profile'), {
      user: req.session.userLogged,
    });
  },
};
