'use strict';

var Bookshelf = require('bookshelf').PG,
    RunEvent = require('../models/RunEvent');

var RunEvents = Bookshelf.Collection.extend({
    model: RunEvent
});

module.exports = RunEvents;
