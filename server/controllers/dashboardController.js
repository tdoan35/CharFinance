const UserProfile = require('../models/userProfile');
const Users = require('../models/userModel');

const dashboardController = {};

dashboardController.getUserProfile = (req, res, next) => {
  console.log('made a get request to /api/userProfile');

  return next();
}


dashboardController.addAsset = (req, res, next) => {
  console.log('We are here!!');
  // console.log('res.locals.user is: ', res.locals.user);
  console.log('req.cookies in dashboardController is: ', req.cookies)
};

dashboardController.getUsername = async (req, res, next) => {
  // console.log(req.cookies.ssid);

  res.locals = await Users.find({ _id: req.cookies.ssid });

  // console.log('the res.locals after User.find() is ', res.locals);

  return next();
};


module.exports = dashboardController;