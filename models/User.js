'use strict';

var Bookshelf = require('bookshelf').PG;

var User = Bookshelf.Model.extend({
    tableName: 'users'
});

module.exports = User;
