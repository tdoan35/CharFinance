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
      username: res.locals[0].username,
      assets: res.locals[0].assets,
      liabilities: res.locals[0].liabilities,
    }

    console.log('the profile obj is: ', profile);
    res.status(200).json(profile);
  }
);

router.get('/getAssets',
  dashboardController.getAssets,
  (req, res) => {
    const assets = res.locals[0].assets;

    console.log('the assets objs of the user is: ', assets);

  }

);


router.put('/addAsset',
  dashboardController.addAsset,
  (req, res) => {
    res.status(200).json('Success!!!')
  }
);

router.put('/editAsset',
  dashboardController.editAsset,
  (req, res) => {
    res.status(200).json('Success!!!')
  }
);

router.put('/addDebt',
  dashboardController.addDebt,
  (req, res) => {
    res.status(200).json('Success!!!')
  }
);

router.put('/editDebt',
  dashboardController.editDebt,
  (req, res) => {
    res.status(200).json('Success!!!')
  }
);




module.exports = router;