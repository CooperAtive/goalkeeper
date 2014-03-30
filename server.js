// Module dependecies
var application_root = __dirname,
    express = require( 'express' ),
    path = require( 'path' );
    Bookshelf = require('bookshelf');

// connect to postgres db
Bookshelf.PG = Bookshelf.initialize({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'goaltender',
        database: 'goaltender_dev',
        charset: 'utf8'
    }
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

var users = require('./routes/users');

app.get('')

var port = 3000;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in the %s mode', port, app.settings.env );
});
