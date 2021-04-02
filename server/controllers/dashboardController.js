const UserProfile = require('../models/userProfile');
const Users = require('../models/userModel');

const dashboardController = {};

dashboardController.getUserProfile = (req, res, next) => {
  console.log('made a get request to /api/userProfile');

  return next();
}


dashboardController.addAsset = (req, res, next) => {
  console.log('We are here!!');
  console.log('The req.body of the post request is: ', req.body);

  let assetType = '';
  let asset = {};

  if (req.body.cash) {
    assetType = 'cash';
    asset.cash = Number(req.body.cash);
  } else if (req.body.savings) {
    assetType = 'savings';
    asset.savings = Number(req.body.savings)
  } else if (req.body.checking) {
    assetType = 'checking';
    asset.checking = Number(req.body.checking)
  } else if (req.body.securities) {
    assetType = 'securities';
    asset.securities = Number(req.body.securities)
  } else if (req.body.properties) {
    assetType = 'properties';
    asset.properties = Number(req.body.properties)
  } else if (req.body.investments) {
    assetType = 'investments';
    asset.investments = Number(req.body.investments)
  } else {
    assetType = 'otherAssets';
    asset.otherAssets = Number(req.body.otherAssets)
  }
  console.log('asset is ', asset);


  Users.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return res.status(400).send('User was not successfully found')
    } else {
      // console.log('The users firstname is: ', user.firstName);
      // console.log('The users assets is: ', user.assets);
      // console.log('users.asset[assetType] is', user.assets[assetType]);
      
      asset[assetType] += user.assets[assetType];

      console.log('cumulative assets is now ', asset);

      let ogAssets = user.assets;

      ogAssets[assetType] = asset[assetType];

      console.log('all the assets obj is: ', ogAssets);

      Users.findOneAndUpdate(
        { username: req.body.username },
        { $set: { assets: ogAssets }},
        { new: true},
        (err, user) => {
          if (err) {
            return res.status(400).send('Users assets was not found - could not update');
          } else {
            // res.status(200).send(user)
            return next();
          }
        }
      )
    }
  })

};

dashboardController.editAsset = (req, res, next) => {

  let assetType = '';
  let asset = {};

  if (req.body.cash) {
    assetType = 'cash';
    asset.cash = Number(req.body.cash);
  } else if (req.body.savings) {
    assetType = 'savings';
    asset.savings = Number(req.body.savings)
  } else if (req.body.checking) {
    assetType = 'checking';
    asset.checking = Number(req.body.checking)
  } else if (req.body.securities) {
    assetType = 'securities';
    asset.securities = Number(req.body.securities)
  } else if (req.body.properties) {
    assetType = 'properties';
    asset.properties = Number(req.body.properties)
  } else if (req.body.investments) {
    assetType = 'investments';
    asset.investments = Number(req.body.investments)
  } else {
    assetType = 'otherAssets';
    asset.otherAssets = Number(req.body.otherAssets)
  }
  console.log('asset is ', asset);


  Users.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return res.status(400).send('User was not successfully found')
    } else {
      // console.log('The users firstname is: ', user.firstName);
      console.log('The users assets is: ', user.assets);
      // console.log('users.asset[assetType] is', user.assets[assetType]);
      
      // asset[assetType] += user.assets[assetType];

      console.log('cumulative assets is now ', asset);

      let ogAssets = user.assets;

      ogAssets[assetType] = asset[assetType];

      console.log('all the assets obj is: ', ogAssets);

      Users.findOneAndUpdate(
        { username: req.body.username },
        { $set: { assets: ogAssets }},
        { new: true},
        (err, user) => {
          if (err) {
            return res.status(400).send('Users assets was not found - could not update');
          } else {
            // res.status(200).send(user)
            return next();
          }
        }
      )
    }
  })

}



dashboardController.addDebt = (req, res, next) => {
  console.log('We are here!!');
  console.log('The req.body of the post request is: ', req.body);

  let debtType = '';
  let debt = {};

  if (req.body.creditCards) {
    debtType = 'creditCards';
    debt.creditCards = Number(req.body.creditCards);
  } else if (req.body.mortgages) {
    debtType = 'mortgages';
    debt.mortgages = Number(req.body.mortgages)
  } else if (req.body.loans) {
    debtType = 'loans';
    debt.loans = Number(req.body.loans)
  } else if (req.body.accountsPayable) {
    debtType = 'accountsPayable';
    debt.accountsPayable = Number(req.body.accountsPayable)
  } else if (req.body.billsPayable) {
    debtType = 'billsPayable';
    debt.billsPayable = Number(req.body.billsPayable)
  } else if (req.body.taxPayables) {
    debtType = 'taxPayables';
    debt.taxPayables = Number(req.body.taxPayables)
  } else {
    debtType = 'otherDebts';
    debt.otherDebts = Number(req.body.otherDebts)
  }
  console.log('debt is ', debt);


  Users.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return res.status(400).send('User was not successfully found')
    } else {
      // console.log('The users firstname is: ', user.firstName);
      // console.log('The users assets is: ', user.assets);
      // console.log('users.asset[assetType] is', user.assets[assetType]);
      
      debt[debtType] += user.liabilities[debtType];

      console.log('cumulative debt is now ', debt);

      let ogDebts = user.liabilities;

      ogDebts[debtType] = debt[debtType];

      console.log('all the debts obj is: ', ogDebts);

      Users.findOneAndUpdate(
        { username: req.body.username },
        { $set: { liabilities: ogDebts }},
        { new: true},
        (err, user) => {
          if (err) {
            return res.status(400).send('Users debts was not found - could not update');
          } else {
            // res.status(200).send(user)
            return next();
          }
        }
      )
    }
  })
};

dashboardController.editDebt = (req, res, next) => {
  console.log('We are here!!');
  console.log('The req.body of the post request is: ', req.body);

  let debtType = '';
  let debt = {};

  if (req.body.creditCards) {
    debtType = 'creditCards';
    debt.creditCards = Number(req.body.creditCards);
  } else if (req.body.mortgages) {
    debtType = 'mortgages';
    debt.mortgages = Number(req.body.mortgages)
  } else if (req.body.loans) {
    debtType = 'loans';
    debt.loans = Number(req.body.loans)
  } else if (req.body.accountsPayable) {
    debtType = 'accountsPayable';
    debt.accountsPayable = Number(req.body.accountsPayable)
  } else if (req.body.billsPayable) {
    debtType = 'billsPayable';
    debt.billsPayable = Number(req.body.billsPayable)
  } else if (req.body.taxPayables) {
    debtType = 'taxPayables';
    debt.taxPayables = Number(req.body.taxPayables)
  } else {
    debtType = 'otherDebts';
    debt.otherDebts = Number(req.body.otherDebts)
  }
  console.log('debt is ', debt);


  Users.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return res.status(400).send('User was not successfully found')
    } else {
      // console.log('The users firstname is: ', user.firstName);
      // console.log('The users assets is: ', user.assets);
      // console.log('users.asset[assetType] is', user.assets[assetType]);
      
      // debt[debtType] += user.liabilities[debtType];

      console.log('cumulative debt is now ', debt);

      let ogDebts = user.liabilities;

      ogDebts[debtType] = debt[debtType];

      console.log('all the debts obj is: ', ogDebts);

      Users.findOneAndUpdate(
        { username: req.body.username },
        { $set: { liabilities: ogDebts }},
        { new: true},
        (err, user) => {
          if (err) {
            return res.status(400).send('Users debts was not found - could not update');
          } else {
            // res.status(200).send(user)
            return next();
          }
        }
      )
    }
  })
};



dashboardController.getUsername = async (req, res, next) => {
  // console.log(req.cookies.ssid);

  res.locals = await Users.find({ _id: req.cookies.ssid });

  // console.log('the res.locals after User.find() is ', res.locals);

  return next();
};

dashboardController.getAssets = async (req, res, next) => {

  res.locals = await Users.find({ _id: req.cookies.ssid });

  return next();
};


module.exports = dashboardController;