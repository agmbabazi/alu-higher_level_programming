#!/usr/bin/env node

const request = require('request');

const movieId = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/' + movieId;

request(url, function (error, response, body) {
  if (!error) {
    const data = JSON.parse(body);
    console.log(data.title);
  } else {
    console.log(error);
  }
});
