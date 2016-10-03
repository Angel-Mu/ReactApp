'use strict'

// import path from 'path';
// import Express from 'express';





const express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	app = express();

var path = require("path"),
rootPath = path.normalize(__dirname + '/..');


const PATH_STYLES = path.resolve(__dirname, '../client/src/assets/stylesheets');
const PATH_DIST = path.resolve(__dirname, '../../dist');

// const S_PUBLIC = rootPath + '/client';
const router = require('./server/router');

var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname + '/client/');



app.use(express.static(__dirname + '/client/'));

app.use('/dist', express.static(__dirname + '/dist/'));
router(app);
app.listen(port);
console.log('Your server is running on port ' + port + '.');
