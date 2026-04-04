export const protegerRuta = (req, res, next) => {
  if (!req.session.usuario) {
    return res.redirect("/");
  }
  next();
};