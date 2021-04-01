const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 12;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  assets: {
    cash: {type: Number, default: 0},
    savings: {type: Number, default: 0},
    checking: {type: Number, default: 0},
    securities: {type: Number, default: 0},
    properties: {type: Number, default: 0},
    investments: {type: Number, default: 0},
    otherAssets: {type: Number, default: 0},
  },
  liabilities: {
    creditCards: {type: Number, default: 0},
    mortgages: {type: Number, default: 0},
    loans: {type: Number, default: 0},
    accountsPayable: {type: Number, default: 0},
    billsPayable: {type: Number, default: 0},
    taxPayables: {type: Number, default: 0},
    otherDebts: {type: Number, default: 0},
  }
});

// Hash password before saving to DB ---------------------------------
userSchema.pre('save', function(next) {
  let user = this;
  // Generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      // Override the cleartext password with the hashed one
      user.password = hash;
      console.log('The bcrypt hash is', hash);
      // console.log(user.password);
      next();
    })
  });
});

module.exports = mongoose.model('Users', userSchema);