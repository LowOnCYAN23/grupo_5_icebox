const path = require('path');

module.exports = {
  login: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/login'));
  },

  register: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/register'));
  },

  admon: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/admon'));
  },
};
