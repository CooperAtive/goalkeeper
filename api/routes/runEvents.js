'use strict';

var _ = require('underscore');

var RunEvent = require('../models/RunEvent'),
RunEvents = require('../collections/RunEvents'),
Promise = require('bluebird');

exports.createRunEvent = function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    var body = req.body;
    var user_id = body.user_id;
    var target_id = body.target_id;
    var distance = body.distance;
    var date = body.date;
    var time = body.time;
    RunEvent.forge({
        user_id: user_id,
        target_id: target_id,
        distance: distance,
        date: date,
        time: time
        //user: see above
    })
    .save()
    .exec(function(error, event) {
        console.log(event);
        if(error) {
            console.log(error);
            res.send(500, {'error': error});
        } else {
            res.send({ 'runEvent': event });
        }
    });
};

exports.findById = function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    new RunEvent({'id': req.params.id})
    .fetch()
    .exec(function(error, event) {
        if(error) {
            res.send(500, {'error': error});
        } else {
            var e = event.attributes;
            console.log(e);
            res.send({ 'runEvent': e });
        }
    });
};

exports.updateRunEvent = function(req, res) {
    new RunEvent({id: req.params.id})
    .save(req.body, {patch: true})
    .exec(function(error, runEvent) {
        if(error) {
            res.send(500, {'error': error});
        } else {
            res.send({'runEvent': runEvent});
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

exports.tenMostRecent = function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    new RunEvents().fetch()
    .exec(function(error, runEvents) {
        if(error) {
            //res.writeHead(500);

            res.send(500, {'error': error});
        } else {
            var set = runEvents.models.map( function (runEvent ) {
                var e = runEvent.attributes;
                return e;
            });
            var byDate = _.sortBy(set, function(elem) {
                return elem.date;
            });
            var tenMostRecent = _.first(byDate, 10);
            console.log(tenMostRecent);
            res.send({'runEvents': tenMostRecent});
        }
    });
};

