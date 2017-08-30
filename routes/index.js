var express = require('express');
var router = express.Router();
var request = require('request');
var https = require('https');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

.post('/callApi', function(req, res) {
    request.post({
        form: {
            V_REQUEST:'/v/FeYK8d4Km4uhZQkkHqXTGw.html',
            V_TOKEN:'gMPa-b1wWoWHhAlvubt82qFI41bJEE4UF-YVG8aZe4uIJU0nY9V3saF_-yftVZCr',
            V_TIME:'1504116827'
        },
        url: 'http://vb.h265.se/v/FeYK8d4Km4uhZQkkHqXTGw.html'
    }, function(error, response, body) {
        console.log(body);
        res.status(200).send(body);
    });
});

module.exports = router;
