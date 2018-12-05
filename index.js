// require node_modules
var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');

//require routes
const internshipRoute = require('./routes/internship');
const indexRoute = require('./routes/index');
const apiRoute = require('./routes/api');

//connect to DB
const uri = process.env.MLAB;
mongoose.connect(uri, { useNewUrlParser: true });

//setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));

//using routes
app.use("/", indexRoute);
app.use("/internship", internshipRoute);
app.use("/api", apiRoute);

app.listen(process.env.PORT || 8000, function() {
    console.log('Listening!');
});
