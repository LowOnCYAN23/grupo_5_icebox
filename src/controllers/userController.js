const path = require('path');
const db = require('../database/models');

const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

module.exports = {
  list: (req, res) => {
    db.Users.findAll().then((list) => {
      res.render('../views/products/products', { list: list });
    });
  },

  login: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/login'));
  },

  loginProcess: (req, res) => {
    db.Users.findOne({
      where: {
        email: req.body.email,
      },
    }).then((response) => {
      if (response) {
        return res.send(response);
      }

      return res.render(path.resolve(__dirname, '../views/users/login'), {
        errors: {
          email: {
            msg: 'Este correo electrónico no esta registrado',
          },
        },
      });
    });
  },

  register: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/register'));
  },

  create: (req, res) => {
    const resultValidation = validationResult(req);
    // console.log(resultValidation.mapped())--> Para ver los errores en los campos del formulario
    if (resultValidation.errors.length > 0) {
      return res.render(path.resolve(__dirname, '../views/users/register'), {
        // Convierte el array de errores (Que estan en el middleware de validateRegisterMiddleware) en objeto literal
        errors: resultValidation.mapped(),
        // Objeto literal donde van a estar todo lo que vino en el formulario
        oldData: req.body,
      });
    }

    db.Users.findOne({
      where: {
        email: req.body.email,
      },
    }).then((response) => {
      if (response) {
        res.render(path.resolve(__dirname, '../views/users/register'), {
          errors: {
            email: {
              msg: 'Este correo electrónico ya esta registrado',
            },
          },

          oldData: req.body,
        });
      } else {
        db.Users.create({
          name: req.body.name,
          email: req.body.email,
          password: bcryptjs.hashSync(req.body.password, 10),
          image: req.file.filename,
        })
          .then(() => {
            return res.redirect('/login');
          })
          .catch((error) => res.send(error));
      }
    });
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
