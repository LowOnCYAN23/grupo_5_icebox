const path = require('path');
const { body } = require('express-validator');

module.exports = {
    body('name').notEmpty().withMessage('Completa con tu nombre completo'),
    body('email').notEmpty().withMessage('Completa con tu corre electrónico').bail().isEmail().withMessage('Necesitas formato de correo ej.: alias@dominio.com'),
    body('password').notEmpty().withMessage('Elije una contraseña segura')
}