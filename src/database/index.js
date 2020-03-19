const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.99.100/noderest', { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;