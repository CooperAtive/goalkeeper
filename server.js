// Module dependecies
var application_root = __dirname,
express = require( 'express' ),
path = require( 'path' );
Bookshelf = require('bookshelf');

// connect to postgres db
Bookshelf.PG = Bookshelf.initialize({
    client: 'pg',
    connection: {
        host: 'ec2-184-72-231-67.compute-1.amazonaws.com',
        database: 'd367t35dadpedg',
        user: 'yqwtqizjzjbvmv',
        password: 'YR2Bj7KI8c63w51cQQ99e77-uy',
        port: 5432,
        ssl: 'require',
        charset: 'utf8'
    }
});

Bookshelf.PG.knex.client.getConnection().then(function (connection) {
      console.log('Yay, we have a connection!');
}).catch(function (err) {
      console.log('Ooops, something went wrong!');
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

app.get('/api/v1/users', users.collection);
app.get('/api/v1/users/:id', users.findById);
app.post('/api/v1/users', users.createUser);
app.put('/api/v1/users/:id', users.updateUser);
app.delete('/api/v1/users/:id', users.deleteUser);

var session = require('./routes/session');
app.post('/login', session.login);

var port = 3000;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in the %s mode', port, app.settings.env );
});
