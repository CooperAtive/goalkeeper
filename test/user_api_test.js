//==========
//This file tests all the aspects of the User API
//Further tests for targets, events, etc. may depend on the successful creation of a user and/or
//a new target. The calls to each test's dependencies will be made in each test file.
//While this does provide some repetition, if one object's create process is broken,
//it will allow the developer to pinpoint the exact file/test that needs to pass before moving
//on to fixing 'chained' test processes.
//==========

//****************
//login/logout tests

'use strict';
//jshint unused:false

var superagent = require('superagent');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should;

var app = require('../server').app;

describe('Users API', function() {
    var id;

    it('can create a new user', function(done) {
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
            id = res.body.user.id;

            done();

        });
    });

    it('can get the users collection', function(done) {
        superagent.get('localhost:3000/api/v1/users')
        .end(function(e, res) {
            expect(e).to.eql(null);
            expect(res.body.users).to.not.be.eql(null);

            done();

        });
    });

    it('can find a user by id', function(done) {
        superagent.get('localhost:3000/api/v1/users/' + id)
        .end(function(e, res) {
            expect(e).to.eql(null);
            expect(res.body.user).to.not.be.eql(null);
            expect(res.body.user.first_name).to.be.eql('Kalina');
            expect(res.body.user.last_name).to.be.eql('Wongorwu');

            done();

        });
    });

    it('can update a user\'s first name', function(done) {
        superagent.put('localhost:3000/api/v1/users/' + id)
        .send(
            {
            first_name: 'Matt'
        })
        .end(function(e, res) {
            expect(e).to.eql(null);
            expect(res.body.user).to.not.be.eql(null);
            expect(res.body.user.first_name).to.be.eql('Matt');

            done();

        });
    });

    it('can delete a user', function(done) {
        superagent.del('localhost:3000/api/v1/users/' + id)
        .end(function(e, res) {
            expect(e).to.eql(null);
            expect(res.body.message).to.be.eql('Success');

            done();

        });
    });
});

