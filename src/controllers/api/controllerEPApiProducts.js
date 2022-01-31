const db = require('../../database/models');

module.exports = {

  //LISTADO PRODUCTOS DE DB PARA DASHBOARD  "http://localhost:5000/api/products/list"
  list: (req, res) => {

    db.Products.findAll()
    .then((list) => {
      res.send(list);
    })
    .catch(e=>console.log(e));
  },

  //ENDPOINT PARA RUTA DINAMICA POR LISTADO "http://localhost:5000/api/products/" 
  total: (req, res) => {
    
    db.Products.findAll()
    .then((products) => {
      let count = products.length;
      let list  = products.map(function (task, index, array) {


        return (
          "ID= "+(task.id_product)+
          " - NAME: "+(task.name_product)+
          " - DESCRIPTION: "+(task.description_product)+
          " - COLOR: "+(task.fk_color)+
          " - CATEGORY: "+(task.fk_category)+
          " - TRADEMARK: "+(task.fk_trademark)+
          " - GENRE: "+(task.fk_genre)+
          " - DETAIL:http://localhost:5000/api/products/"+(task.id_product)
        )
    });

      let apiProducts = {
        count:count,
        products:list
      };
      res.send(JSON.stringify(apiProducts));
    })
    .catch(e=>console.log(e));
  },

  //ENDPOINT PARA RUTA DINAMICA POR ID "http://localhost:5000/api/products/"
  id: (req, res) => {

    let idProduct = req.params.id;

    db.Products.findByPk(idProduct)
    .then((product) => {
      res.send(product);
    })
    .catch(e=>console.log(e));
  }

};