#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, function (error, response, body) {
  if (!error) {
    fs.writeFile(filePath, body, 'utf8', function (err) {
      if (err) {
        console.log(err);
      }
    });
  } else {
    console.log(error);
  }
});
