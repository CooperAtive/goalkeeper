App.ApplicationAdapter = DS.RESTAdapter;

DS.RESTAdapter.reopen({
    namespace: 'api/v1'
});

App.Store = DS.Store.extend({});

