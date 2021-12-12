const path = require('path');
const { validationResult } = require('express-validator');
const Users = require('db.Users');
const bcryptjs = require('bcryptjs');
//const db = require('db');

module.exports = {
  login: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/login'));
  },

  processLogin: (req, res) => {
    let userToLogIn = Users.findAll('email', req.body.email); //el método findByField no existe en sequelize o de donde se sacó

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

        return res.redirect('/profile');
      }
      return res.render(path.resolve(__dirname, '../views/users/login'), {
        errors: {
          email: {
            msg: 'Las credenciales son inválidas',
          },
        },
      });
    }
    return res.render(path.resolve(__dirname, '../views/users/login'), {
      errors: {
        email: {
          msg: 'El correo electrónico no se encuentra registrado',
        },
      },
    });
  },

  register: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/register'));
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);
    

    if (resultValidation.errors.length > 0) { //console.log("prueba de error")
      return res.render(path.resolve(__dirname, '../views/users/register'), {
        errors: resultValidation.mapped(),//el atributo errors como o donde se asigna
        oldData: req.body,// donde reside este atributo oldData ¿como registro?
      });
    }

    let userinDB = Users.findAll('email', req.body.email);//método findByField parece no pertenecer a sequelize
    if (userinDB) {
      return res.render(path.resolve(__dirname, '../views/users/login'), {
        errors: {
          email: {
            msg: 'Este email ya está en uso',
          },
        },
        oldData: req.body,
      });
    }
    else {
      let userToCreate = {
        name: req.body.name,
        email: req.body.email,
         // Aunque en req.body se esta llamando password, el siguiente password
         // lo sobreescribe
         password: bcryptjs.hashSync(req.body.password, 10),
         image: req.file.filename,
       };
       Users.create(userToCreate);//de donde salió la función createUser?? .create pertenece a sequelize?
       return res.redirect(path.resolve(__dirname, '../views/users/login'));
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
