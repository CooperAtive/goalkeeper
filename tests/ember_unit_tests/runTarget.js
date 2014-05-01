var runTargetController;

module('App.RunTargetController', {
  setup: function() {
    Ember.run(function() {
      runTargetController = App.__container__.lookup('controller:runTarget');
    });
  },

  teardown: function() {

  }
});

test('Verify runTargetController', function() {
  App.reset();
  ok(runTargetController, 'Expecting non-null runTargetController');
});

test('Testing default distance, date, time are empty strings', function() {
  App.reset();
  strictEqual('', runTargetController.get('distance'),
    'distance should be an empty string');
  strictEqual('', runTargetController.get('date'),
    'date should be an empty string');
  strictEqual('', runTargetController.get('time'),
    'time should be an empty string');
});

test('Testing resetForm resets the form', function() {
  var formSet = false;
  runTargetController.set('distance', 10);
  runTargetController.set('date', new Date(2014, 4, 1));
  runTargetController.set('time', 200);

  if(runTargetController.get('distance') !== '' &&
      runTargetController.get('date') !== '' &&
      runTargetController.get('time') !== '') {
    formSet = true;
  }

  ok(formSet, 'Expect that form is not empty once set');

  runTargetController.resetForm();

  strictEqual('', runTargetController.get('distance'),
    '#resetForm() should reset distance');
  strictEqual('', runTargetController.get('date'),
    '#resetForm() should reset date');
  strictEqual('', runTargetController.get('time'),
    '#resetForm() should reset time');
});

test('Testing proper miles/kilometers conversion', function() {
  App.reset();
  strictEqual(10, runTargetController.calculateDistance(10, 'miles'),
    "#calculateDistance() OK")
});

test('Testing seconds are properly calculated from seconds and minutes', function() {
  App.reset();
  strictEqual(45, runTargetController.calculateSeconds(45, 0),
    '#calculateSeconds() should calculate seconds with only seconds');
  strictEqual(200, runTargetController.calculateSeconds(20, 3),
    '#calculateSeconds() should calculate seconds from seconds and minutes');
});

test('Testing date gets formatted properly', function() {
  App.reset();
  var may1 = new Date(2014, 4, 1);

  strictEqual('2014-05-01', runTargetController.formatDate(may1), 
    '#formatDate() OK');
});



