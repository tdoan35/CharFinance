const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  assets: [
    {
      title: String,
      amount: Number
    }
  ],
  liabilities: [
    {
      title: String,
      amount: Number
    }
  ]
});


module.exports = mongoose.model('UserProfile', userProfileSchema);