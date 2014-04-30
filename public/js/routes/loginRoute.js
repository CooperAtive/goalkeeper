'use strict';

App.LoginRoute = Ember.Route.extend({
    actions: {
        // action to trigger authentication with Facebook
        authenticateWithFacebook: function() {
            this.get('session').authenticate('authenticator:facebook', {});
        }
    }
             /*
    model: function() {
        return Ember.Object.create({});
    }*/
});
