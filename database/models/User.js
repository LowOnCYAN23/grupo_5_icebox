//FALTA IMPLEMENTAR CODIGO PARA USO CON DATA.SQL

const fs = require('fs');

const User = {
  fileName: './database/users.json',

  getData: () => {
    return JSON.parse(fs.readFileSync(User.fileName, 'utf-8'));
  },

  findAll: () => {
    return User.getData();
  },

  createId: () => {
    let allUsers = User.findAll();
    let lastUser = allUsers.pop();
    if (lastUser) {
      return lastUser.id + 1;
    }
    return 1;
  },

  findByPk: (id) => {
    let allUsers = User.findAll();
    let userFound = allUsers.find((oneUser) => oneUser.id === id);
    return userFound;
  },

  findByField: (field, text) => {
    let allUsers = User.findAll();
    // Trae el primero que aparezca en la busqueda
    let userFound = allUsers.find((oneUser) => oneUser[field] === text);
    return userFound;
  },

  createUser: (userData) => {
    let allUsers = User.findAll();
    let newUser = {
      id: User.createId(),
      ...userData,
    };
    allUsers.push(newUser);
    fs.writeFileSync(User.fileName, JSON.stringify(allUsers, null, '  '));
    return newUser;
  },

  delete: (id) => {
    let allUsers = User.findAll();
    let finalUsers = allUsers.filter((oneUser) => oneUser.id !== id);
    fs.writeFileSync(User.fileName, JSON.stringify(finalUsers, null, '  '));
    return true;
  },
};

module.exports = User;
