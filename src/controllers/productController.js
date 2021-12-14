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

  detail: (req, res) => {
    db.Products.findByPk(req.params.id_product).then((detail) => {
      res.render('../views/products/productDetail', { detail: detail });
    });
  },

  create: (req, res) => {
    db.Products.create({
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
    db.Products.update(
      {
        name_product: req.body.name,
        description_product: req.body.description,
        product_image: req.body.image,
        price: req.body.price,
        fk_id_color: req.body.color,
        fk_id_category: req.body.category,
        fk_id_trademark: req.body.trademark,
        fk_id_genre: req.body.genre,
      },
      {
        where: {
          id: req.params.id_product,
        },
      }
    );
    res.redirect('/products/' + req.params.id_product);
  },

  delete: (req, res) => {
    db.Products.destroy({
      where: {
        id: req.params.id_product,
      },
    });
    res.redirect('/products');
  },

  cart: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/products/productCart'));
  },
};
