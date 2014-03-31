/*
App.Store = DS.Store.extend({
   adapter: DS.FixtureAdapter
});
*/
App.ApplicationAdapter = DS.RESTAdapter;

DS.RESTAdapter.reopen({
    namespace: 'api/v1'
});
App.Store = DS.Store.extend({});
App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: "_id"
});
