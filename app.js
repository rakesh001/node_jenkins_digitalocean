var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});

app.get('/users',function(req,res) {
    res.send("List of all users");
  });

  app.listen(process.env.PORT || 4000);
 
  module.exports = app;