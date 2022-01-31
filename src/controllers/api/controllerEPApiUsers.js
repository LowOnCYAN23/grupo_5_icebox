const db = require('../../database/models');

module.exports = {

  //LISTADO USUARIOS DE DB PARA DASHBOARD  "http://localhost:5000/api/users/list"
  list: (req, res) => {

    db.Users.findAll()
    .then((list) => {
      res.send(list);
    })
    .catch(e=>console.log(e));
  },

  //ENDPOINT PARA RUTA DINAMICA POR LISTADO "http://localhost:5000/api/users/" 
  total: (req, res) => {
    
    db.Users.findAll()
    .then((users) => {
      let count = users.length;
      let list = users.map(function (task, index, array) {

        return (
          "ID= "+(task.id_users)+
          " - NAME: "+(task.name)+
          " - EMAIL: "+(task.email)+
          " - DETAIL:http://localhost:5000/api/users/"+
          (task.id_users))
    });       

      let apiUsers = {
        count:count,
        users:list
      };
      res.send(JSON.stringify(apiUsers));
    })
    .catch(e=>console.log(e));
  },

  //ENDPOINT PARA RUTA DINAMICA POR ID "http://localhost:5000/api/users/:id"
  id: (req, res) => {

    let idUser = req.params.id;

    db.Users.findByPk(idUser)
    .then((user) => {
      let data = {
        id:user.id_users,
        nombre: user.name,
        imagen: user.image
      };
      res.send(JSON.stringify(data));
    })
    .catch(e=>console.log(e));
  }
};

