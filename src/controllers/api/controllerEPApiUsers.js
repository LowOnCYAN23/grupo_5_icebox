const db = require('../../database/models');

const path = require('path');

module.exports = {
  list: (req, res) => {
    db.Users.findAll()
    .then((list) => {
      res.send(list);
    })
    .catch(e=>console.log(e));
  },
  id: (req, res) => {
    let idUser = req.params.id;
    db.Users.findByPk(idUser)
    .then((user) => {
      let data = {id:user.id_users, nombre: user.name, imagen: user.image};
      res.send(JSON.stringify(data));
    })
    .catch(e=>console.log(e));
  },
  total: (req, res) => {
    db.Users.findAll(users)
    .then((users) => {
      let count = setUsers(data.length);
      let list  = {id:user.id_users, nombre: user.name, email: user.email, detail:"http://localhost:5000/api/users/"+user.id_users};

      
    })
  }

};

