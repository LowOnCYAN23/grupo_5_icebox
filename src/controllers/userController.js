const { profile } = require('console');
const path = require('path');
const { validationResult } = require('express-validator');

module.exports = {
  login: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/login'));
  },

  register: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/register'));
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      res.render(path.resolve(__dirname, '../views/users/register'), {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    res.send('Ok, Las validaciones fueron aprobadas. NO TIENES ERRORES');
  },

  createUser: (req, res) => {},

  profile: (req, res) => {},
};
