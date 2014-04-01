'use strict';

var RunEvent = require('../models/RunEvent'),
    RunEvents = require('../collections/RunEvents'),
    Promise = require('bluebird');

exports.createRunEvent = function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    var body = req.body;
    var distance = body.distance;
    var date = body.date;
    var time = body.time;
    RunEvent.forge({
        distance: distance,
        date: date,
        time: time
        //user: see above
    })
    .save()
    .exec(function(error, event) {
        if(error) {
            res.writeHead(500);
            res.send({'error': error});
        } else {
            res.send({ 'event': event });
        }
    });
};

exports.findById = function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    new RunEvent({'id': req.params.id})
    .fetch()
    .exec(function(error, event) {
        if(error) {
            res.writeHead(500);
            res.send({'error': error});
        } else {
            var e = event.attributes;
            res.send({ 'runEvent': e });
        }
    });
};

exports.updateRunEvent = function(req, res) {
    new RunEvent({id: req.params.id})
    .save(req.body, {patch: true})
    .exec(function(error) {
        if(error) {
            res.writeHead(500);
            res.send({'error': error});
        } else {
            res.send({'message': 'Success'});
        }
    });
};

exports.deleteRunEvent = function(req, res) {
    new RunEvent({id: req.params.id})
    .destroy()
    .exec(function(error) {
        if(error) {
            res.writeHead(500);
            res.send({'error': error});
        } else {
            res.send({'message': 'Success'});
        }
    });
};

exports.collection = function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    new RunEvents().fetch()
    .exec(function(error, runEvents) {
        if(error) {
            res.writeHead(500);
            res.send({'error': error});
        } else {
            var set = runEvents.models.map( function( runEvent ) {
                var e = runEvent.attributes;
                return e;
            });

            res.send({ 'runEvents': set });
        }
    });
};

