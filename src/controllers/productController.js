const path = require('path');
let fs = require('fs');

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
    let listProducts = fs.readFileSync('products.json', { encoding: 'utf-8' });
    res.render(path.resolve(__dirname, '../views/products/products'), {
      listProducts: listProducts,
    });
  },

  createProduct: (req, res) => {
    let product = {
      Nombre_Producto: req.body.products,
      Descripción: req.body.description,
      Imagen: req.body.productimage,
      Precio: req.body.price,
    };
    let listProducts = fs.readFileSync('products.json', { encoding: 'utf-8' });
    let products;
    if (listProducts == '') {
      products = [];
    } else {
      products = JSON.parse(listProducts);
    }
    products.push(products);
    productsJSON = JSON.stringify(products);
    fs.writeFileSync('products.json', productsJSON);
  },

  readProduct: (req, res) => {
    let products;
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
