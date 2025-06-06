#!/usr/bin/env node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (!error) {
    const todos = JSON.parse(body);
    const completedTasks = {};

    for (let task of todos) {
      if (task.completed) {
        if (completedTasks[task.userId]) {
          completedTasks[task.userId]++;
        } else {
          completedTasks[task.userId] = 1;
        }
      }
    }

    console.log(completedTasks);
  } else {
    console.log(error);
  }
});
