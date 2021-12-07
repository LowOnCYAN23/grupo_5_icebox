function guestMiddleware(req, res, next) {
  // si hay un usuario logueado hace las siguientes acciones...
  if (req.session.userLogged) {
    return res.redirect('/profile');
  }
  next();
}

module.exports = guestMiddleware;
