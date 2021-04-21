const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/express-mvc');

module.exports = mongoose;
