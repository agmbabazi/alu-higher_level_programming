#!/usr/bin/node
// This script writes a string to a file

const fs = require('fs');

// Get the file path and string to write from command-line arguments
const filePath = process.argv[2];
const content = process.argv[3];

// Write the content to the file using UTF-8 encoding
fs.writeFile(filePath, content, 'utf8', function (err) {
  if (err) {
    console.log(err); // Print the error if something went wrong
  }
});
