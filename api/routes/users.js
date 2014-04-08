'use strict';

var User = require('../models/User'),
    Users = require('../collections/Users'),
    Promise = require('bluebird');

exports.findById = function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    new User({'id': req.params.id})
    .fetch()
    .exec(function(error, user) {
        if(error) {
            res.send(500, {'error': error});
        } else {
            var u = user.attributes;
            res.send({ 'user': u });
        }
    });
};

exports.updateUser = function(req, res) {
    new User({id: req.params.id})
    .save(req.body, {patch: true})
    .exec(function(error) {
        if(error) {
            res.send(500, {'error': error});
        } else {
            res.send({'message': "Success"});
        }
    });
};

exports.deleteUser = function(req, res) {
    new User({id: req.params.id})
    .destroy()
    .exec(function(error) {
        if(error) {
            res.send(500, {'error': error});
        } else {
            res.send({'message': "Success"});
        }
    });
};

exports.collection = function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    new Users().fetch()
    .exec(function(error, users) {
        if(error) {
            res.send(500, {'error': error});
        } else {
            var set = users.models.map( function( user ) {
                var u = user.attributes;
                return u;
            });

            res.send({ 'users': set });
        }
    });
};

