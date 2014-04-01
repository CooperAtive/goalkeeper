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
        response.send({'message': 'Success'});
      }
    }
  });
};
