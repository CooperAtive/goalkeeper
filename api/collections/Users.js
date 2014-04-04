var Bookshelf = require('bookshelf').PG,
    User = require('../models/User');

var Users = Bookshelf.Collection.extend({
    model: User
});

module.exports = Users;
