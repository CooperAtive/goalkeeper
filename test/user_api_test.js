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
    it('can get a single user', function(done) {
        superagent.get('localhost:3000/api/v1/users' + id)
        .end(function(e, res) {
            expect(e).to.eql(null);
            expect(res.body.user).to.not.be.eql(null);
            expect(res.body.user.first_name).to.be.eql('Kalina');
            expect(res.body.user.last_name).to.be.eql('Wongorwu');

            done();

        });
    });
});

