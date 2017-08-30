var express = require('express');
var router = express.Router();
var request = require('request');
var https = require('https');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

.post('/callApi', function() {
    request.post({
        form: {
            V_REQUEST:'/v/FeYK8d4Km4uhZQkkHqXTGw.html',
            V_TOKEN:'gMPa-b1wWoWHhAlvubt82qFI41bJEE4UF-YVG8aZe4uIJU0nY9V3saF_-yftVZCr',
            V_TIME:'1504116827'
        },
        url: 'http://vb.h265.se/v/FeYK8d4Km4uhZQkkHqXTGw.html'
    }, function(error, response, body) {
        console.log(body);
    });

    // An object of options to indicate where to post to
    // var post_options = {
    //     host: 'http://vb.h265.se',
    //     path: '/v/FeYK8d4Km4uhZQkkHqXTGw.html',
    //     method: 'POST'
    // };
    //
    // var post = https.request(post_options, function (res) {
    //     res.setEncoding('utf8');
    //     res.on('data', function (data) {
    //         console.log('Response: ' + data);
    //     });
    // });
    //
    // post.write(JSON.stringify({
    //     'V_REQUEST':'/v/FeYK8d4Km4uhZQkkHqXTGw.html',
    //     'V_TOKEN':'gMPa-b1wWoWHhAlvubt82qFI41bJEE4UF-YVG8aZe4uIJU0nY9V3saF_-yftVZCr',
    //     'V_TIME':'1504116827'
    // }));
    // post.end();
});

module.exports = router;
