//EN LOS CONTROLADORES SE IMPLEMENTA LA VINCULACIÓN A LA BASE DE DATOS CON SEQUELIZE

const path = require('path');
const { validationResult } = require('express-validator');
// const Users = require('db.Users');
const bcryptjs = require('bcryptjs');
const db = require('../database/models'); //VARIABLE db TRAYENDO A SEQUELIZE PARA OBTENER LOS DATOS DE icebox_db

module.exports = {
  login: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/login'));
  },

  processLogin: (req, res) => {
    let userToLogIn = db.User.findAll('email', req.body.email); //el método findByField no existe en sequelize o de donde se sacó
     console.log('señal 1')                                                           //se agregó la vinculación a la db con db.User.findAll
    userToLogIn.then(function (users) {

      if (userToLogIn) {
      let passwordIsOK = bcryptjs.compareSync(
        req.body.password,
        userToLogIn.password
      );
      if (passwordIsOK) {
        delete userToLogIn.password;
        req.session.userLogged = userToLogIn;

        if (req.body.saveUser) {
          res.cookie('userEmail', req.body.email, { max: 1000 * 60 * 2 });
        }

        return res.redirect('/src/views/users/profile'); //¿esta ruta es la indicada en luagre de /profile?
      }
      return res.render(path.resolve(__dirname, '../views/users/login'), {
        errors: {
          email: {
            msg: 'Las credenciales son inválidas',
          },
        },
      });
    })
    return res.render(path.resolve(__dirname, '../views/users/login'), {
      errors: {
        email: {
          msg: 'El correo electrónico no se encuentra registrado',
        },
      },
    });
  },

  register: (req, res) => {
    console.log('señal 2')
    return res.render(path.resolve(__dirname, '../views/users/register'));
  },

  processRegister: (req, res) => {
    console.log('señal 3')
    const resultValidation = validationResult(req);
    

    if (resultValidation.errors.length > 0) { console.log('señal 4')
      return res.render(path.resolve(__dirname, '../views/users/register'), {
        errors: resultValidation.mapped(),//el atributo errors como o donde se asigna
        oldData: req.body,// donde reside este atributo oldData ¿como registro?
      });
    }

    let userinDB = db.User.findAll('email', req.body.email);//método findByField parece no pertenecer a sequelize
    if (userinDB).then(function(users) {
      
    { console.log('señal 5')
      return res.render(path.resolve(__dirname, '../views/users/login'), {
        errors: {
          email: {
            msg: 'Este email ya está en uso',
          },
        },
        oldData: req.body,
      });
    }
    })
    else{ console.log('señal 6');
      let userToCreate = { 
        name: req.body.name,
        email: req.body.email,
         // Aunque en req.body se esta llamando password, el siguiente password
         // lo sobreescribe
         password: bcryptjs.hashSync(req.body.password, 10),
         image: req.file.filename,
       };
       db.User.create(userToCreate);//de donde salió la función createUser?? .create pertenece a sequelize?
       return res.redirect(path.resolve(__dirname, '../views/users/profile'));
    }
    
  
  },

  userProfile: (req, res) => {
    console.log(req.cookies.userEmail);
    return res.render(path.resolve(__dirname, '../views/users/profile'), {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    console.log(req.session);
    return res.redirect('/');
  },
};
