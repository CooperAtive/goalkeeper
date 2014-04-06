'use strict';

var User = require('../models/User');

exports.login = function(request, response) {
  new User({email: request.body.email})
  .fetch()
  .exec(function(error, user) {
    if(error) {
      response.send(500, {'error': error});
    } else {
      user = user.attributes;
      if(request.body.password !== user.password) {
        response.send(500, {'error': 'Password does not match'});
      } else {
        delete user.password;
        response.send({'user': user });
      }
    }
  });
};

exports.signup = function(req, res) {
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
            res.send(500, {'error': error});
        } else {
            res.send({ 'user': user });
        }
    });
};
