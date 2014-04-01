'use strict';

var Bookshelf = require('bookshelf').PG;

var RunEvent = Bookshelf.Model.extend({
    tableName: 'running_events'
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
