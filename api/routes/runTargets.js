'use strict';

var RunTarget = require('../models/RunTarget'),
RunTargets = require('../collections/RunTargets'),
Promise = require('bluebird');
var _ = require('underscore');

exports.createRunTarget = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body);
    var body = req.body;
    var user_id = body.user_id;
    if (!user_id) {
        res.send(500, {'error': 'Must be logged in'});
    }
    var total_miles = body.total_miles;
    var start_date = body.start_date;
    var end_date = body.end_date;
    var frequency = body.frequency;
    var name = body.name;

    //var user = get user who creates this target
    //do I need to send this here or can every one automatically be
    //attached to a user?
    RunTarget.forge({
        user_id: user_id,
        total_miles: total_miles,
        start_date: start_date,
        end_date: end_date,
        frequency: frequency,
        name: name
        //user: see above
    })
    .save()
    .exec(function(error, target) {
        if(error) {
            res.send(500, {'error': error});
        } else {
            res.send({ 'runTarget': target });
        }
    });
};

exports.findById = function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    new RunTarget({'id': req.params.id})
    .fetch({withRelated: 'runEvents'})
    .exec(function(error, target) {
              if(error) {
                  res.send(500, {'error': error});
              } else {
                  var runTarget = target.attributes;
                  runTarget.runEvents = [];
                  var runEvents = [];
                  target.relations.runEvents.models.forEach(function(elem) {
                      runEvents.push(elem.attributes);
                      runTarget.runEvents.push(elem.attributes.id);
                  });
                  res.send({ 'runTarget': runTarget,
                             'runEvents' : runEvents
                });
              }
          });
};

exports.updateRunTarget = function(req, res) {
    new RunTarget({id: req.params.id})
    .save(req.body, {patch: true})
    .exec(function(error, runTarget) {
        if(error) {
            res.send(500, {'error': error});
        } else {
            res.send({'runTarget': runTarget});
        }
    });
};

exports.deleteRunTarget = function(req, res) {
    new RunTarget({id: req.params.id})
    .destroy()
    .exec(function(error) {
        if(error) {
            res.send(500, {'error': error});
        } else {
            res.send({'message': 'Success'});
        }
    });
};

exports.collection = function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    new RunTargets().fetch()
    .exec(function(error, runTargets) {
        if(error) {
            res.send(500, {'error': error});
        } else {
            var set = runTargets.models.map( function( runTarget ) {
                var t = runTarget.attributes;
                return t;
            });
            console.log(set);
            res.send({ 'runTargets': set });
        }
    });
};

exports.targetLites = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    new RunTargets()
    .query('where', 'user_id', '=', req.query.user_id)
    .fetch()
    .exec(function(error, runTargets) {
        if(error) {
            res.send(500, {'error': error});
        } else {
            var targets = runTargets.models.map( function( runTarget ) {
                var target = {
                    name: runTarget.attributes.name,
                    id: runTarget.attributes.id
                };

                return target;
            });

            res.send({ 'targetLites': targets });
        }
    });
};



