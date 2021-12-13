const path = require('path');
const db = require('../database/models');

module.exports = {
  admon: (req, res) => {
    res.render(path.resolve(__dirname, '../views/products/admon'));
  },

  list: (req, res) => {
    db.Products.findAll().then((list) => {
      res.render('../views/products/products', { list: list });
    });
  },

  create: (req, res) => {
    db.Product.create({
      name_product: req.body.name,
      description_product: req.body.description,
      product_image: req.body.image,
      price: req.body.price,
      fk_id_color: req.body.color,
      fk_id_category: req.body.category,
      fk_id_trademark: req.body.trademark,
      fk_id_genre: req.body.genre,
    });
    res.redirect('/products');
  },

  edit: (req, res) => {
    res.render(path.resolve(__dirname, '../views/products/admon'));
  },

  update: (req, res) => {
    res.render(path.resolve(__dirname, '../views/products/admon'));
  },

  delete: (req, res) => {
    db.Products.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect('/products');
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
