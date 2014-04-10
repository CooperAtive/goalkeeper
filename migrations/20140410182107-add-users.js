'use strict';

var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
    db.createTable('users', {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        first_name: {type: 'string', length: 25},
        last_name: {type: 'string', length: 25},
        email: {type: 'string', length: 50},
        password: {type: 'string', length: 25}
    }, callback);
};

exports.down = function(db, callback) {
    db.dropTable('users', callback);

};

