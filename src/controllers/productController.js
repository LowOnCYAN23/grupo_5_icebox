const path = require('path');
let fs = require('fs');
<<<<<<< HEAD
const db = require('../database/models');
=======
const db = require('../../database/models');
//const sequelize = db.sequelize;
>>>>>>> 2f349b8b21777667f9a6c82e8e67f2e925a4dd50

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
    db.ProductsTable.findAll().then((products) => {
      res.render('products.ejs', { products });
    });
  },

  createProduct: (req, res) => {
    db.ProductsTable.create({
      name_product: req.body.name_product,
      description_product: req.body.description_product,
      product_image: req.body.product_image,
      price: req.body.price,
      color: req.body.color,
      category: req.body.category,
      trademark: req.body.trademark,
      genre: req.body.genre,
    }).then(() => res.redirect('/home'));
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
