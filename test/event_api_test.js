//==========
//This file tests all the aspects of the Events API
//Further tests for events, etc. may depend on the successful creation of a user and/or
//a new target. The calls to each test's dependencies will be made in each test file.
//While this does provide some repetition, if one object's create process is broken,
//it will allow the developer to pinpoint the exact file/test that needs to pass before moving
//on to fixing 'chained' test processes.
//==========

//**********

'use strict';
//jshint unused:false

var superagent = require('superagent');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should;

var app = require('../server').app;

describe('Events API', function() {
    var id;
    var target_id;
    var user_id;

    it('can get the id of a new user to use as creator of the target', function(done) {
        superagent.post('localhost:3000/signup')
        .send({
            first_name: 'Kalina',
            last_name: 'Wongorwu',
            email: 'kalina@wong.com',
            password: 'valid_password'
        })
        .end(function(e, res) {
            expect(e).to.eql(null);
            expect(res.body.user).to.not.be.eql(null);
            expect(res.body.user.first_name).to.be.eql('Kalina');
            expect(res.body.user.last_name).to.be.eql('Wongorwu');
            user_id = res.body.user.id;

            done();

        });
    });

    it('can create a target to attach events to', function(done) {
        superagent.post('localhost:3000/api/v1/runTargets')
        .send({
            user_id: user_id,
            name: 'Test Target',
            total_miles: 100,
            start_date: '4/15/2014',
            end_date: '9/15/2014',
            frequency: '1'
        })
        .end(function(e, res) {
            expect(e).to.eql(null);
            expect(res.body.runTarget).to.not.be.eql(null);
            expect(res.body.runTarget.name).to.be.eql('Test Target');
            expect(res.body.runTarget.total_miles).to.be.eql(100);
            expect(res.body.runTarget.start_date).to.be.eql('4/15/2014');
            expect(res.body.runTarget.end_date).to.be.eql('9/15/2014');
            expect(res.body.runTarget.frequency).to.be.eql('1');
            expect(res.body.runTarget.user_id).to.be.eql(user_id);

            target_id = res.body.runTarget.id;

            done();

        });
    });

    it('can create a new event with correct user and target id\'s', function(done) {
        superagent.post('localhost:3000/api/v1/runEvents/')
        .send({
            user_id: user_id,
            target_id: target_id,
            distance: 3,
            date: '4/17/2014',
            time: {minutes: 30}
        })
        .end(function(e, res) {
            expect(e).to.eql(null);
            expect(res.body.runEvent).to.not.be.eql(null);
            expect(res.body.runEvent.user_id).to.be.eql(user_id);
            expect(res.body.runEvent.target_id).to.be.eql(target_id);
            expect(res.body.runEvent.distance).to.be.eql(3);
            expect(res.body.runEvent.time).to.be.eql({minutes: 30});
            id = res.body.runEvent.id;
            console.log(id);

            done();

        });
    });

    it('can find an event by id', function(done) {
        superagent.get('localhost:3000/api/v1/runEvents/' + id)
        .end(function(e, res) {
            expect(e).to.eql(null);
            console.log(res.body.runEvent.id);
            expect(res.body.runEvent).to.not.be.eql(null);
            expect(res.body.runEvent.user_id).to.be.eql(user_id);
            expect(res.body.runEvent.target_id).to.be.eql(target_id);
            expect(res.body.runEvent.distance).to.be.eql(3);
            expect(res.body.runEvent.time).to.be.eql({minutes: 30});

            done();

        });
    });

    it('can get a collection of events', function(done) {
        superagent.get('localhost:3000/api/v1/runEvents/')
        .end(function(e, res) {
            expect(e).to.eql(null);
            expect(res.body.length).to.not.be.eql(0);

            done();

        });
    });

    it('can update an event\'s time', function(done) {
        superagent.put('localhost:3000/api/v1/runEvents/' + id)
        .send(
            {
            time: 32
        })
        .end(function(e, res) {
            expect(e).to.eql(null);
            expect(res.body.runEvent).to.not.be.eql(null);
            expect(res.body.runEvent.time).to.be.eql(32);

            done();

        });
    });

    it('can delete an event', function(done) {
        superagent.del('localhost:3000/api/v1/runEvents/' + id)
        .end(function(e, res) {
            expect(e).to.eql(null);
            expect(res.body.message).to.be.eql('Success');

            done();

        });
    });
    superagent.del('localhost:3000/api/v1/runTargets/' + target_id);
    superagent.del('localhost:3000/api/v1/users/' + user_id);
});
