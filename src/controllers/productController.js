const path = require('path');
let fs = require('fs');
const db = require('../database/models');

module.exports = {
  detail: (req, res) => {
    return res.render(
      path.resolve(__dirname, '../views/products/productDetail')
    );
  },

  cart: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/products/productCart'));
  },

  admon: (req, res) => {
    res.render(path.resolve(__dirname, '../views/products/admon'));
  },

  list: (req, res) => {
    db.Products.findAll().then((list) => {
      res.render('../views/products/products', { list: list });
    });
  },

  createProduct: (req, res) => {
    db.Products.create({
      name_product: req.body.name_product,
      description_product: req.body.description_product,
      product_image: req.body.product_image,
      price: req.body.price,
      fk_id_color: req.body.color,
      fk_id_category: req.body.category,
      fk_id_trademark: req.body.trademark,
      fk_id_genre: req.body.genre,
    }).then(() => res.redirect('../views/products/products'));
  },

  editProduct: (req, res) => {
    let idProduct = req.params.idProduct;
    res.send(idProduct);
  },

  upgradeProduct: (req, res) => {
    let usuario = {
      Nombre_Producto: req.body.products,
      Descripción: req.body.description,
      Imagen: req.body.productimage,
      Precio: req.body.price,
    };
    res.send(usuario);
  },
};
