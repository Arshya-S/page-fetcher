const request = require('request');
const fs = require('fs');

const args = process.argv;

const fetcher = function(URL, path) {
  request('http://www.example.edu/', (error, response, body) => {
    fs.writeFile('./index.html',body,err => {
      if (err) {
        console.error(err);
      } else {
        console.log('Downloaded and saved', body.length, 'bytes to', path);
      }
    });
  });
};



fetcher(args[2],args[3]);




