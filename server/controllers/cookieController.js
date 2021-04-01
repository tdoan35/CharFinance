

const cookieController = {};

// setSSIDCookie - store the user id in a cookie
cookieController.setSSIDCookie = (req, res, next) => {

  // console.log('The res.locals in cookieController is: ', res.locals);
  res.cookie('ssid', res.locals.user.id, { httpOnly: true });
  next();
}

module.exports = cookieController;