#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (!error) {
    const data = JSON.parse(body).results;
    let count = 0;

    for (let film of data) {
      for (let character of film.characters) {
        if (character.includes('/18/')) {
          count++;
          break;
        }
      }
    }

    console.log(count);
  } else {
    console.log(error);
  }
});
