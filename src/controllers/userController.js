const path = require('path');
const db = require('../database/models/index');
const User = db.User   //para que sea utilizada esta variable debe ser Users?? pero si es Users no la toma

module.exports = {
  login: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/login'));
  },

  list: (req, res) => {
    db.Users.then((users) => {
      res.render('../views/profile', { users: users });
    });
  },

  create: (req, res) => {
    db.Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image,
    }).then( ()=> {return res.render(
      path.resolve(__dirname, multerMiddleware, '../views/users/profile')
    )} ).catch(error=>res.send(error));
    
  },

  update: (req, res) => {
    db.User.update(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        image: req.body.image,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.render(path.resolve(__dirname, '../views/users/profile'));
  },

  delete: (req, res) => {
    db.Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect('/products');
  },

  register: (req, res) => {
    res.render(path.resolve(__dirname, '../views/users/register'));
  },
};
