const pug = require('pug');
const express = require('express');
const app = express();

//set the view engine
app.set('view engine', 'pug');

//routes
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
});

//start the server
app.listen(3000, () => console.log('Example app listening on port 3000!'))
