const express = require('express');
const path = require('path');
const app = express();

var port = process.env.PORT || 8888;

app.use(express.static(path.join(__dirname, 'client')));
// app.use('/static', express.static('./client'));

// app.get('/', function(req, res) {
//   // res.sendfile('client/Coindesk parody.html');
//   res.sendfile('./client/index.html');
// })

app.listen(port, function() {
  console.log("Coinparody server listening for crypto on port: ", port);
})
