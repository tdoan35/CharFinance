const express = require('express');

const dashboardController = require('../controllers/dashboardController');

const router = express.Router();

router.get('/userProfile',
  dashboardController.getUserProfile,
  (req, res) => res.status(200).json()
);

router.post('/assets',
  dashboardController.addAsset,
  (req, res) => res.status(200).json()
);

router.get('/getUser',
  dashboardController.getUsername,
  (req, res) => {
    console.log('res.locals in api/getUser is: ', res.locals);

    const profile = {
      firstName: res.locals[0].firstName,
      lastName: res.locals[0].lastName,
      username: res.locals[0].username
    }

    console.log('the profile names obj profiles is: ', profile);
    res.status(200).json(profile);
  }
);








module.exports = router;