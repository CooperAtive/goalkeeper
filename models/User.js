'use strict';

var Bookshelf = require('bookshelf').PG;

var User = Bookshelf.Model.extend({
    tableName: 'users'
});

module.exports = User;
/*
create table users (
 id serial primary key,
 first_name varchar(25),
 last_name varchar(25),
 email varchar(50),
 password varchar(32)
);
*/
