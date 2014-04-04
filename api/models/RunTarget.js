'use strict';

var Bookshelf = require('bookshelf').PG;
var RunEvent = require('./RunEvent');
var RunEvents = require('../collections/RunEvents');

var RunTarget = Bookshelf.Model.extend({
    tableName: 'target_running',
    runEvents: function(){
        return this.hasMany(RunEvent, 'target_id');
    }
});

module.exports = RunTarget;

/*
   create table target_running (
   id serial primary key,
   user_id serial references users(id),
   name varchar(50),
   total_miles int,
   start_date date,
   end_date date,
   frequency int
   );
   */
