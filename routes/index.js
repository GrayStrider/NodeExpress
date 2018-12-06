const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {title: 'Express'});
});

// Test route //
router.get('/test', function (req, res, next) {
	res.render('test', {title: 'test'});
});

module.exports = router;
