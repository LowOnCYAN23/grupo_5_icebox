const db = require('../../database/models');

const path = require('path');

module.exports = {
  list: (req, res) => {
    db.Products.findAll().then((list) => {
      res.send(list);
    })
    .catch(e=>console.log(e));
  },

};