'use strict';

App.RunEvent = DS.Model.extend({
  target_id: DS.belongsTo('runTarget'),
  distance: DS.attr(),
  date: DS.attr(),
  time: DS.attr()
});



/*
   create table running_events (
   id serial primary key,
   target_id serial references target_running(id),
   user_id serial references users(id),
   distance real,
   date date,
   time interval
   );
   */
