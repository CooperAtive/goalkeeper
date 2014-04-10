'use strict';

var dbm = require('db-migrate');
var type = dbm.dataType;
var pg = require('pg');

exports.up = function(db, callback) {
    db.createTable('event_running', {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        target_id: {type: 'int', length: 25, foreignKey: true},
        last_name: {type: 'string', length: 25},
        email: {type: 'string', length: 50},
        password: {type: 'string', length: 25}
    });
    callback();
};

exports.down = function(db, callback) {
    db.dropTable('users', callback);

};
