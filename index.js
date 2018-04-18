var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/project'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/project/project.html');
});

app.listen(3000, function () {
  console.log('Application running at http://localhost:3000/');
});
