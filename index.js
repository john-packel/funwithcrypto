const express = require('express');
const app = express();

var port = process.env.PORT || 8888;

app.get('/', function(req, res) {
  res.sendfile('client/Coindesk parody.html');
})
app.listen(port, function() {
  console.log("Coinparody server listening for crypto on port: ", port);
})
