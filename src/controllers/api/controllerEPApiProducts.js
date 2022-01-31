const db = require('../../database/models');

const path = require('path');

module.exports = {
  list: (req, res) => {
    db.Products.findAll().then((list) => {
      res.send(list);
    })
    .catch(e=>console.log(e));
  },
  id: (req, res) => {
    let idProduct = req.params.id;
    db.Products.findByPk(idProduct)
    .then((product) => {
      res.send(product);
    })
    .catch(e=>console.log(e));
  }

};