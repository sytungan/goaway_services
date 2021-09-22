const express = require('express');
const { post } = require('request');
const router = express.Router()
const {
  Location
} = require('../models');

router.get('/', async (req, res) => {
  var img = ''
  var request = require('request').defaults({ encoding: null });
  request.get('https://cdn.discordapp.com/attachments/866893458975621171/890192342500380682/download.jpeg', function (error, response, body) {
      if (!error && response.statusCode == 200) {
          img = Buffer.from(body).toString('base64');
          // res.writeHead(200, {
          //   'Content-Type': 'image/png',
          //   'Content-Length': img.length
          // });
          res.status(200).send(img);

      }
  });
});

router.post('/', async (req, res) => {
  var img = ''
  var request = require('request').defaults({ encoding: null });
  request.get(req.body.imgUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          img = Buffer.from(body).toString('base64');
          // res.writeHead(200, {
          //   'Content-Type': 'image/png',
          //   'Content-Length': img.length
          // });
          res.status(200).send(img);

      }
  });
});
module.exports = router;