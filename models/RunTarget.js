'use strict';

var Bookshelf = require('bookshelf').PG;

var RunTarget = Bookshelf.Model.extend({
    tableName: 'target_running'
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
