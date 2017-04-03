const express = require('express');
const path = require('path');
const app = express();
var forceSsl = require('force-ssl-heroku');

app.use(forceSsl);

var port = process.env.PORT || 8888;

// app.use(express.static(path.join(__dirname + 'client')));
// app.use(express.static('client'));


app.get('/', function(req, res) {
  // res.sendfile('client/Coindesk parody.html');
  res.sendfile('./index.html');
})

app.listen(port, function() {
  console.log("Coinparody server listening for crypto on port: ", port);
})
