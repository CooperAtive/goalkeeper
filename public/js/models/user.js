App.User = DS.Model.extend({
  first_name: DS.attr(),
  last_name: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  //Profile Only properties
  email_preferences: DS.attr(),
  text_preferences: DS.attr(),
  alternate_email: DS.attr(),
  notify_friends: DS.attr()
});

/*
App.User.FIXTURES = [
  { id: 1,
    first_name: "Matt",
    last_name: "Merkes",
    email: 'matt@gmail.com',
    password: 'password'
  },
  { id: 2,
    first_name: "Cooper",
    last_name: "Trowbridge",
    email: 'coop@gmail.com',
    password: 'password'
  },
  { id: 3,
    first_name: "Kalina",
    last_name: "Wu",
    email: 'kalina@gmail.com',
    password: 'password'
  }
];
*/
