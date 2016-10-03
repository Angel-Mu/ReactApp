const express = require('express');
const _ourController = require('./controllers/controller');

var path = require("path");

module.exports = function(app) {
	const apiRoutes = express.Router();

	//routes will go here
	apiRoutes.get('/helloworld', _ourController.helloworld);

	app.use('/api', apiRoutes);

	app.get('*', (req, res) => {
	  res.sendFile(path.resolve(__dirname, '../client/index.html'));
	});

}
