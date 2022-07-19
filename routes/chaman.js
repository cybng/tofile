var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/reg', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/profile', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/update', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/admin', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/logout', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/signout', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/seller', function(req, res, next) {
   res.render('index', { title: 'Express' });
});

router.get('/seller1', function(req, res, next) {
   res.render('index', { title: 'Express' });
});

router.get('/push', function(req, res, next) {
   res.render('index', { title: 'Express' });
});

router.get('/lendor', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/blendor', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pull', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pull2', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pull11', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gitbsdk', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
