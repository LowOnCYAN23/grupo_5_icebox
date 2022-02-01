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

  userDetails: (req, res) => {
    db.Users.findByPk(req.params.id).then((user) => {
      return res.render(path.resolve(__dirname, '../views/user/userDetails'), {
        user: user,
      });
    });
  },

  register: (req, res) => {
    return res.render('./user/register');
  },

  login: (req, res) => {
    return res.render('./user/login');
  },

  loginProcess: (req, res) => {
    const resultValidation = validationResult(req);
    // console.log(resultValidation.mapped())--> Para ver los errores en los campos del formulario
    if (resultValidation.errors.length > 0) {
      return res.render(path.resolve(__dirname, '../views/user/login'), {
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

      /// Probar lo que compruebe la contraseña ///
    }).then((userLogged) => {
      if (userLogged) {
        return res.render('./user/profile', { userLogged: userLogged });
      }

      res.render(path.resolve(__dirname, '../views/user/login'), {
        errors: {
          email: {
            msg: 'La contraseña y/o el correo electrónico no son válidos',
          },
        },
      });
    });
  },

  create: (req, res) => {
    db.Users.findOne({
      where: {
        email: req.body.email,
      },
    }).then((emailInDB) => {
      if (emailInDB) {
        return res.render(path.resolve(__dirname, '../views/user/register'), {
          errors: {
            email: {
              msg: 'Este correo electrónico ya esta registrado',
            },
          },
          oldData: req.body,
        });
      }
      const resultValidation = validationResult(req);
      // console.log(resultValidation.mapped())--> Para ver los errores en los campos del formulario
      if (resultValidation.errors.length > 0) {
        return res.render(path.resolve(__dirname, '../views/user/register'), {
          // Convierte el array de errores (Que estan en el middleware de validateRegisterMiddleware) en objeto literal
          errors: resultValidation.mapped(),
          // Objeto literal donde van a estar todo lo que vino en el formulario
          oldData: req.body,
        });
      } else {
        db.Users.create({
          name: req.body.name,
          email: req.body.email,
          password: bcryptjs.hashSync(req.body.password, 10),
          image: req.file.filename,
        }).then(() => {
          return res.redirect('/login');
        });
      }
    });
  },
  edit: (req, res) => {
    db.Users.findByPk(req.params.id).then((user) => {
      return res.render(path.resolve(__dirname, '../views/user/edit'), {
        user: user,
      });
    });
  },

  update: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      db.Users.findByPk(req.params.id).then((user) => {
        return res.render(path.resolve(__dirname, '../views/user/edit'), {
          errors: resultValidation.mapped(),
          oldData: req.body,
          user: user,
        });
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
    return res.redirect('/usersInDB');
  },

  delete: (req, res) => {
    db.Users.destroy({
      where: {
        id_users: req.params.id,
      },
    });
    return res.redirect('/usersInDB');
  },
  profile: (req, res) => {
    db.Users.findByPk(req.params.id).then((userLogged) => {
      return res.render(path.resolve(__dirname, '../views/user/profile'), {
        userLogged: userLogged,
      });
    });
  },

  logout: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/user/register'));
  },
};
