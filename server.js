// Module dependecies
var application_root = __dirname,
    express = require( 'express' ),
    path = require( 'path' );
// Postgres simple
    // ????????????? use client pool?
// can require native libpq bindings by adding .natve option
var pg = require('pg');
var conString = "postgres://postgres:3000@localhost/postgres";
var client = new pg.Client(conString);
client.connect(function(err) {
    if(err) {
        return console.error('could not connect to postgres', err);
    }
    //print out time/show successful DB connection
    console.log(result.rows[0].theTime);

    client.end();
});

// Create server
var app = express();

app.configure( function() {
    //parses request body and populates request.body
    app.use( express.bodyParser() );

    //checks request.body for HTTP method overrides
    app.use( express.methodOverride() );

    //perform route lookup based on url and HTTP method
    app.use( app.router );

    // Serve static content from this path
    app.use( express.static( path.join( application_root ) ) );

    //show all errors in development
    app.use( express.errorHandler( { dumpExceptions: true, showStack: true } ) );
});

var port = 3000;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in the %s mode', port, app.settings.env );
});
