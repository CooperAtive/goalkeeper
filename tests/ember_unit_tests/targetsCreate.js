var targetsCreateController;

module('App.TargetsCreateController', {
  setup: function() {
    Ember.run(function() {
      targetsCreateController = App.__container__.lookup('controller:targetsCreate');
    });
  },

  teardown: function() {

  }
});

test('Verify targetsCreateController', function() {
  App.reset();
  ok(targetsCreateController, 'Expecting non-null targetsCreateController');
});

test('Testing end date is calculated properly given a duration', function() {
  App.reset();
  var may1 = new Date(2014, 4, 1);

  strictEqual("Thu May 08 2014", targetsCreateController.calculateEndDate('days', 7, may1).toDateString(),
    '#calculateEndDate() by days');
  strictEqual("Thu May 08 2014", targetsCreateController.calculateEndDate('weeks', 1, may1).toDateString(),
    '#calculateEndDate() by weeks');
  strictEqual("Tue Jul 01 2014", targetsCreateController.calculateEndDate('months', 2, may1).toDateString(),
    '#calculateEndDate() by months');
  strictEqual("Fri May 01 2015", targetsCreateController.calculateEndDate('years', 1, may1).toDateString(),
    '#calculateEndDate() by years');
});

test('Testing proper miles/kilometers conversion', function() {
  App.reset();
  strictEqual(10, targetsCreateController.calculateDistance(10, 'miles'),
    "#calculateDistance() OK")
});

test('Testing frequency is properly converted to weeks', function() {
  App.reset();
  strictEqual(5, targetsCreateController.calculateFrequency(5, 'week'),
    '#calculateFrequency() returns weeks when passed weeks');
  strictEqual(2, targetsCreateController.calculateFrequency(8, 'month'),
    '#calculateFrequency() returns weeks when passed months');
});

test('Testing date gets formatted properly', function() {
  App.reset();
  var may1 = new Date(2014, 4, 1);

  strictEqual('2014-05-01', targetsCreateController.formatDate(may1), 
    '#formatDate() OK');
});


