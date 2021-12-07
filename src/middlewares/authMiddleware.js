function authMiddleware(req, res, next) {
  // si NO hay un usuario logueado hace las siguientes acciones...
  if (!req.session.userLogged) {
    return res.redirect('/login');
  }
  next();
}

module.exports = authMiddleware;
