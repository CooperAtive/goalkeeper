'use strict';

var Bookshelf = require('bookshelf').PG;
var RunTarget = require('./RunTarget');

var RunEvent = Bookshelf.Model.extend({
    tableName: 'event_running',
    runTarget: function() {
        return this.belongsTo(RunTarget, 'target_id');
    }
});

module.exports = RunEvent;

/*
   create table running_events (
   id serial primary key,
   target_id serial references target_running(id),
   user_id serial references users(id),
   distance real,
   date date,
   time interval
   );
   */
