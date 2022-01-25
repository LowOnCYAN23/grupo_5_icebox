const db = require('../database/models');

const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const path = require('path');

module.exports = {
  list: (req, res) => {
    db.Users.findAll().then((list) => {
      res.render('./user/usersInDB', { list: list });
    });
  },

  register: (req, res) => {
    res.render('./user/register');
  },

  login: (req, res) => {
    res.render('./user/login');
  },

  loginProcess: (req, res) => {
    db.Users.findOne({
      where: {
        email: req.body.email,
      },
    }).then((response) => {
      if (response) {
        res.send(response);
      }

      res.render(path.resolve(__dirname, '../views/user/login'), {
        errors: {
          email: {
            msg: 'Este correo electrónico no esta registrado',
          },
        },
      });
    });
  },

  create: (req, res) => {
    const resultValidation = validationResult(req);
    // console.log(resultValidation.mapped())--> Para ver los errores en los campos del formulario
    if (resultValidation.errors.length > 0) {
      res.render(path.resolve(__dirname, '../views/user/register'), {
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
        res.render(path.resolve(__dirname, '../views/user/register'), {
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
            res.redirect('/login');
          })
          .catch((error) => res.send(error));
      }
    });
  },
  edit: (req, res) => {
    db.Users.findByPk(req.params.id).then((user) => {
      res.render(path.resolve(__dirname, '../views/user/edit'), {
        user: user,
      });
    });
  },

  update: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      res.render(path.resolve(__dirname, '../views/user/register'), {
        // Convierte el array de errores (Que estan en el middleware de validateRegisterMiddleware) en objeto literal
        errors: resultValidation.mapped(),
        // Objeto literal donde van a estar todo lo que vino en el formulario
        oldData: req.body,
      });
    }
    db.Users.update(
      {
        name: req.body.name,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        image: req.file.filename,
      },
      {
        where: {
          id_users: req.params.id,
        },
      }
    );
    res.redirect('/usersInDB');
  },

  delete: (req, res) => {
    db.Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect('/usersInDB');
  },

  logout: (req, res) => {
    res.render(path.resolve(__dirname, '../views/user/register'));
  },
  userProfile: (req, res) => {
    console.log(req.cookies.userEmail);
    res.render(path.resolve(__dirname, '../views/user/profile'), {
      user: req.session.userLogged,
    });
  },
};
