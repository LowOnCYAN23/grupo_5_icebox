const path = require('path');
const { validationResult } = require('express-validator');
const User = require('../../database/models/User');
const bcryptjs = require('bcryptjs');

module.exports = {
  login: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/login'));
  },

  processLogin: (req, res) => {
    let userToLogIn = User.findByField('email', req.body.email);

    if (userToLogIn) {
      let passwordIsOK = bcryptjs.compareSync(
        req.body.password,
        userToLogIn.password
      );
      if (passwordIsOK) {
        delete userToLogIn.password;
        req.session.userLogged = userToLogIn;

        if (req.body.saveUser) {
          res.cookie('userEmail', req.body.email, { max: 1000 * 60 * 2 });
        }

        return res.redirect('/profile');
      }
      return res.render(path.resolve(__dirname, '../views/users/login'), {
        errors: {
          email: {
            msg: 'Las credenciales son inválidas',
          },
        },
      });
    }
    return res.render(path.resolve(__dirname, '../views/users/login'), {
      errors: {
        email: {
          msg: 'El correo electrónico no se encuentra registrado',
        },
      },
    });
  },

  register: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/register'));
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render(path.resolve(__dirname, '../views/users/register'), {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    let userinDB = User.findByField('email', req.body.email);
    if (userinDB) {
      return res.render(path.resolve(__dirname, '../views/users/login'), {
        errors: {
          email: {
            msg: 'Este email ya está en uso',
          },
        },
        oldData: req.body,
      });
    }

    let userToCreate = {
      ...req.body,
      // Aunque en req.body se esta llamando password, el siguiente password
      // lo sobreescribe
      password: bcryptjs.hashSync(req.body.password, 10),
      avatar: req.file.filename,
    };
    User.createUser(userToCreate);
    return res.redirect(path.resolve(__dirname, '../views/users/login'));
  },

  userProfile: (req, res) => {
    console.log(req.cookies.userEmail);
    return res.render(path.resolve(__dirname, '../views/users/profile'), {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    console.log(req.session);
    return res.redirect('/');
  },
};
