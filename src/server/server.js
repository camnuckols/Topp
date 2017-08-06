const express = require( 'express' );
const { json } = require( 'body-parser' );
const { urlencoded } = require( 'body-parser' );
const boolParser = require( 'express-query-boolean' );
const mongoose = require( 'mongoose' );
const session = require( 'express-session' );
const masterRoutes = require( './MasterRoutes' );
const { key } = require( './sessionConfig/sessionConfig' ); // Session Key
const { mongo } = require( './sessionConfig/sessionConfig' ); // Mongo Database
const { twitter } = require( './sessionConfig/sessionConfig' );
const passport = require( 'passport' );
// const { Strategy } = require( 'passport-twitter';
const TwitterStrategy = require('passport-twitter').Strategy;
console.log( TwitterStrategy );
// const sslRedirect from 'heroku-ssl-redirect';
// const compression = require( 'compression';

const app = express();
const port = process.env.PORT || 8080;

// app.use( compression() );

// app.use( sslRedirect() );

// app.use( express.static( `${ __dirname }/../public` ) );
// app.use( "/css", express.static( __dirname + '/../public/app/css' ) );
// app.use( "/js", express.static( __dirname + '/../public/app/js' ) );
// app.use( "/img", express.static( __dirname + '/../public/app/img' ) );

// app.use( '/blog', ghost( {
// 	config: path.join( __dirname, '/ghost-app/config.js' )
// } ) );

passport.use(new TwitterStrategy( {
    consumerKey: twitter.consumer_key,
    consumerSecret: twitter.consumer_secret,
    callbackURL: "http://localhost:8080/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    console.log( token, tokenSecret, profile, done );
    done( null, profile );
  }
));
app.use( json( { limit: '50mb' } ) );
app.use( urlencoded( { limit: '50mb', extended: true } ) );
app.use( boolParser() );

// app.use( cookieParser() );
app.use( session( key ) );


app.use( passport.initialize() );
app.use( passport.session() );

masterRoutes( app );

const mongoURI = mongo;

mongoose.set( 'debug', true );
mongoose.connect( mongoURI );
mongoose.connection.once( 'open', () => {
    console.log( `Connected to mongo at: ${ mongoURI }` );
} );

app.listen( port, () => {
    console.log( `Express is listening on port: ${ port }` );
} );