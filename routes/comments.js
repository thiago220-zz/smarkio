var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Retorna json com todos os comentários já cadastrados */
router.get('/allComments', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
