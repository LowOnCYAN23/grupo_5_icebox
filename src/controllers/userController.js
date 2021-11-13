const { profile } = require('console');
const path = require('path');

module.exports = {
  login: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/login'));
  },

  register: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/register'));
  },

  create: (req, res) => {},

  profile: (req, res) => {},
};
