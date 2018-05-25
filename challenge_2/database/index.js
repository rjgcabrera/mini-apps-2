//DB INDEX.JS

const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/checkout';

const db = mongoose.connect(mongoUri);

module.exports = db;
