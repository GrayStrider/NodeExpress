const express = require('express');
const router = express.Router();
const dev_title = 'Debug - ';


/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {title: dev_title + 'Express!'});
});

// Test routes //
router.get('/test/', function (req, res, next) {
	res.render('test', {title: dev_title + 'Test'});
});

module.exports = router;
