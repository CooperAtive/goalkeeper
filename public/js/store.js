App.ApplicationAdapter = DS.RESTAdapter;

DS.RESTAdapter.reopen({
    //prepend urls with this
    namespace: 'api/v1'
});

App.Store = DS.Store.extend({});

