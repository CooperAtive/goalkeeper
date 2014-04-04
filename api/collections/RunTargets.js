'use strict';

var Bookshelf = require('bookshelf').PG,
    RunTarget = require('../models/RunTarget');

var RunTargets = Bookshelf.Collection.extend({
    model: RunTarget
});

module.exports = RunTargets;
