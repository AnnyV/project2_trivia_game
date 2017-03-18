var bcrypt = require('bcryptjs');
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')
var connection = require('../config/connection.js')

//ONE IS GET
	//get all the scores

//ONE IS POST
	//insert a score

router.get('/', function(req,res) {
	var query = "SELECT * FROM scores ORDER BY score DESC LIMIT 10"

	connection.query(query, function(err, scores) {
		res.render('scores/index', {
			scores: scores,
			logged_in: req.session.logged_in,
			user_email: req.session.user_email,
			user_id: req.session.user_id,
			username: req.session.username
		});

	});
});

router.post('/create', function(req,res) {
	var query = "INSERT INTO scores (score, user_id) VALUES (?, ?)";

	connection.query(query, [req.body.score, 1], function(err, scores) {
		res.send('200');
	});
});

module.exports = router;
