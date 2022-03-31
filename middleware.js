var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var route = require('./route');
var morgan = require('morgan')
var cors = require('cors')

const fileUpload = require('express-fileupload');

app.use(express.static(__dirname+'/images'));
app.use(cors())
app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({ extended: true,limit:'50mb' }));
app.use(fileUpload());
app.use(morgan('dev'))
app.use(route)


module.exports= app
 