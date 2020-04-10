const express = require ('express');
const app = express();
const morgan = require('morgan');
const path = require ('path'); // manejo de directorios 
var hbs = require('express-handlebars');
const hbshelpers = require('handlebars-helpers');
const multihelpers = hbshelpers();


var session = require('express-session');

// Sesiones
app.use(session({secret: 'UnaClaveMuySecreta'}));
//setting
app.set('views', path.join(__dirname, 'views'));
app.set ('port', 3000);

//handlebars

app.engine(
    "hbs",
    hbs({
      helpers: multihelpers,
      partialsDir: [path.join(__dirname, 'views/partials')],
      extname: ".hbs",
      layoutsDir: path.join(__dirname, 'views/layouts'),
      defaultLayout: "main"
    })
  );
app.set('view engine', 'hbs');

// Recibir información desde formulario y JSON
app.use(express.urlencoded());
app.use(express.json());


//middlewares
app.use(morgan('dev'));
//routes
app.use(require('./routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));
// started server

app.listen (app.get('port'), ()=>{
    console.log ("server en escucha");

});

// envios de mail


