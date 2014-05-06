'use strict';

window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true
});

/*
// Can I implement a custom authenticator that is integrated with passport?

FB.init({appId: 1429116610680315});

App.initializer({
    name: 'authentication',
    initialize: function(container, application) {
        container.register('authenticator:facebook', App.FacebookAuthenticator);
        Ember.SimpleAuth.setup(container, application, {
            authorizerFactory: 'authorizer:facebook',
            routeAfterAuthentication: '/home'
        });
    }
});
*/

App.Route = Ember.Route.extend({
});
