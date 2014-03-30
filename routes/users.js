'use strict';

var User = require('../models/User'),
Users = require('../collections/Users'),
Promise = require('bluebird');

exports.createUser = function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    var body = req.body;
    var first_name = body.first_name;
    var last_name = body.last_name;
    var email = body.email;
    var password = body.password;

    User.forge({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    })
    .save()
    .exec(function(error, user) {
        if(error) {
            errorResponse();
        } else {
            res.send(user);
        }
    });
};

exports.findById = function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    new User({'id': req.params.id})
    .fetch()
    .exec(function(error, user) {
        if(error) {
            errorResponse();
        } else {
            res.send(user);
        }
    });
};

exports.updateUser = function(req, res) {
    new User({id: req.params.id})
    .save(req.body, {patch: true})
    .exec(function(error) {
        if(error) {
            errorResponse();
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
            errorResponse();
        } else {
            res.send({'message': "Success"});
        }
    });
};

exports.collection = function(req, res) {
    res.setHeader("Content-Type", "text/json");

    new Users().fetch()
    .exec(function(error, users) {
        if(error) {
            errorResponse();
        } else {
            res.send(users);
        }
    });
};



function errorResponse() {
    res.writeHead(500);
    res.send({'error': error});
};