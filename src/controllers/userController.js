const path = require('path');
const { validationResult } = require('express-validator');

module.exports = {
  login: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/login'));
  },

  register: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/register'));
  },

  processLogin: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render(path.resolve(__dirname, '../views/users/login'), {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    return res.render(path.resolve(__dirname, '../views/web/index'));
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render(path.resolve(__dirname, '../views/users/register'), {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    return res.render(path.resolve(__dirname, '../views/users/login'));
  },

  createUser: (req, res) => {},

  profile: (req, res) => {},
};
