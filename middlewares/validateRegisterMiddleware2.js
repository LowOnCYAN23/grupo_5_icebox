const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Completa con tu nombre completo'),
    body('email').notEmpty().withMessage('Completa con tu corre electrónico').bail().isEmail().withMessage('Necesitas formato de correo ej.: alias@dominio.com'),
    body('password').notEmpty().withMessage('Elije una contraseña segura').is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(2)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']),
    body('')

]