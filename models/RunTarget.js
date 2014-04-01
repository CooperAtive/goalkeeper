'use strict';

var Bookshelf = require('bookshelf').PG;

var RunTarget = Bookshelf.Model.extend({
    tableName: 'target_running'
});

module.exports = RunTarget;
