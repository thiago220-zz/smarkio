var express = require('express');
var router = express.Router();
var controller = require('../controllers/apiController');

router.get('/allcomments', controller.allComments);

router.post('/addcomment', controller.addComment);

router.post('/getaudio', controller.getAudio);

module.exports = router;
