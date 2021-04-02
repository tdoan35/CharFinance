const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const path = require('path');

const apiRouter = require('./routes/api');
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');



// Connect our MongoDB Database ------------------------
const MONGO_URI = 'mongodb+srv://tdoan:z5LVOGd7smS0ItqI@cluster0.3rm1a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'charmander'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));
// -----------------------------------------------------



// Set our Express view engine as ejs -------------------
app.set('view engine', 'ejs');
// Parse cookies & save to req.cookies
app.use(cookieParser());
// Parse urlencoded body content & save to req.body
app.use(bodyParser.urlencoded({ extended: true }));
// ------------------------------------------------------


// ------------------------ STATIC FILES ----------------------------
// Handle Requests for static files
app.use('/assets', express.static(path.join(__dirname,'../src/assets')))
// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// -------------------------------------------------------------------


// ---------------------- GITHUB OAUTH ROUTE HANDLING ----------------------
app.get('/github', (req, res) => {
  res.redirect('https://github.com/login/oauth/authorize?client_id=d2488361cab711ad9de2');
});

app.get('/oauth-callback', 
  ({ query: { code } }, res, next) => {
    const body = {
      client_id: 'd2488361cab711ad9de2',
      client_secret: 'b9dd554efc50fcc73bc4824bd7c5a3801e7ded91',
      code,
    }
    const opts = { headers: { accept: 'application/json' } };

    axios
      .post('https://github.com/login/oauth/access_token', body, opts)
      .then((_res) => _res.data.access_token)
      .then((token) => {
        console.log('My token:', token);
        res.locals.ssid = token;
        res.redirect('/dashboard');
        next();
      })
      .catch((err) => res.status(500).json({ err: err.message }));
  }, 
  cookieController.setSSIDCookie, 
  // sessionController.startSession, 
  (req, res) => {
    // what should happen here on successful sign up?
    res.redirect('/dashboard');
  }
);

// -------------------------------------------------------------------------


// ------------------------ PUBLIC ROUTES --------------------------
// *** LOGIN PAGE HANDLING ***************
  // GET request to serve login.html on the route '/'
  app.get('/', (req, res) => {
    res.render('./../client/login');
  });

  // GET request to serve login.html on the route '/login'
  app.get('/login', (req, res) => {
    res.render('./../client/login');
  });

  // POST request to /login (logging in the user)
  app.post('/login',
    userController.verifyUser,
    cookieController.setSSIDCookie,
    (req, res) => {
      // console.log('res.locals.user in app.post/login is ', res.locals.user);
      res.redirect('/dashboard');
  });
// ***************************************
// *** SIGNUP PAGE HANDLING **************
  // GET request to serve signup.html on the route '/'
  app.get('/signup', (req, res) => {
    res.render('./../client/signup');
  });

  // POST request upon clicking 'Sign Up' button on the /signup page
  app.post('/signup',
    userController.createUser,
    cookieController.setSSIDCookie,
    (req, res) => {
      res.redirect('/dashboard');
  });
// ****************************************
// -------------------------------------------------------------------


// ---------------------- AUTHORIZED ROUTES --------------------------
// serve dashboard.html on the route '/'
app.get('/dashboard', 
  (req, res) => {
    // console.log('res.locals.user in app.get/dashboard is ', res.locals.user);
    // console.log('req in app.get/dashboard is ', req);
    console.log('req.cookies in app.get/dashboard is: ', req.cookies);

    res.render('./../client/dashboard');
});
// -------------------------------------------------------------------


// -------------- Route Handling for requests to /api ---------------
app.use('/api', apiRouter);
// -------------------------------------------------------------------


// ---------------------- 404 HANDLING --------------------------
 app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});
// -------------- GLOBAL ERROR HANDLING --------------------------
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});
// -------------------------------------------------------------------



app.listen(3000); //listens on port 3000 -> http://localhost:3000/

module.exports = app;