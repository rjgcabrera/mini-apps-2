//DB MODEL
const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const checkoutSchema = new mongoose.Schema({
  name: { type: String, default: 'null' },
  email: { type: String, default: 'null' },
  password: { type: String, default: 'null' },
  address: {
    line1: { type: String, default: 'null' },
    line2: { type: String, default: 'null' },
    city: { type: String, default: 'null' },
    state: { type: String, default: 'null' },
    zip: { type: String, default: 'null' }
  },
  phone: { type: String, default: 'null' },
  billing: {
    creditCardNum: { type: String, default: 'null' },
    expiration: { type: String, default: 'null' },
    CVV: { type: String, default: 'null' },
    zip: { type: String, default: 'null' }
  }
},
  {
    timestamps: true
  }
);

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;
