const path = require('path');

module.exports = {
  index: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/web/index'));
  },

  login: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/login'));
  },

  register: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/register'));
  },

  detail: (req, res) => {
    return res.render(
      path.resolve(__dirname, '../views/products/productDetail')
    );
  },

  cart: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/products/productCart'));
  },
};
