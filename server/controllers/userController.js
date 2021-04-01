const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const userController = {};


// createUser - create and save a new User into the database
userController.createUser = (req, res, next) => {

  // Error handling ----------------------------------------------------------------------------
  let regex = /\W/; // Checking for Non-Alphanumerics
  if ( req.body.username === '' || req.body.password === '' || regex.test(req.body.username) || regex.test(req.body.password) ) {
    res.render('./../client/signup', {error: "Sorry, that's not a valid user/password!"});
  } else {
    // Success handling --------------------------------------------------------------------------
    // Add to db upon successful signup
    User.create(
      req.body, // { username: CLIENT_TEXT, password: CLIENT_PW, firstName: CLIENT_FN, lastName: CLIENT_LN }
      (err, user) => {
        console.log('Successfully created user!');
        console.log('The hashed password is: ', user.password);

        res.locals.user = user;
        // console.log(res.locals.ssid);
        return next();
      }
    );
  }

};

// verifyUser - verify user and password exists in the users database
userController.verifyUser = (req, res, next) => {

  const { username, password } = req.body;
  if (!username || !password) return next('Missing user or password in userController.verifyUser.');

  User.findOne({ username }, (err, user) => {
    if (err) {
      return next('Error in userController.verifyUser: ' + JSON.stringify(err));
    } else if (!user) {
      res.redirect('/signup')
    } else {
      bcrypt.compare(password, user.password)
        .then(result => {
          if (!result) {
            // Password didn't match
            console.log("Password didn't match");
            res.redirect('/signup')
          } else {
            // Password did match, save user for following middlewares
            res.locals.user = user;
            // console.log('res.locals.user in userController.verifyUser is: ', res.locals.user);
            return next();
          }
        })
        .catch(err => {
          return next('Error in userController.verifyUser: ' + JSON.stringify(err));
        })
    }
  })

};





module.exports = userController;