const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 12;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
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
// -------------------------------------------------------------------

// Hash the user inputted password and return boolean if matched
// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//     if (err) return cb(err);
//     return cb(null, isMatch);
//   })
// }
// -------------------------------------------------------------------

module.exports = mongoose.model('Users', userSchema);