'use strict';
/*global casper*/

casper.test.begin('home page', 3, function suite(test) {

  casper.start('http://localhost:3000/', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function(){
    test.assertTitle('OurAgendaApp | Home', 'title is OurAgendaApp');
  });

  casper.then(function() {
    test.assertSelectorHasText('h1.largeHeader','OurAgendaApp');
  });

  casper.run(function(){
    test.done();
  });

});
