var express = require('express');

var app = express.createServer(express.logger());

var buff;
fs.readFile("index.html", function(err, data) {

	if (err) throw err;
	buff = data;
}

var str = buff.toString();


app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
