var express = require("express");

var app = express();

app.get('/', function(request, response) {
  var data = {
    "IP Address": request.headers['x-forwarded-for'],
    "language": request.headers['accept-language'].split(',')[0],
    "Operating System": request.headers['user-agent'].split('(')[1].split(')')[0]
    };
  console.log(JSON.stringify(data));
  response.send(JSON.stringify(data));
});
app.get('*', function(request, response){
  response.redirect('/');
});
app.listen(8080, function() {
  console.log("Listening on port " + 8080);
});