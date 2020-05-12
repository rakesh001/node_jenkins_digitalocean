var request = require("supertest");
var should = require("should");

// This agent refers to PORT where the program is running.

//var server = supertest.agent("http://localhost:4000");
var server = require('../app.js');

// var request = require(‘supertest’);
// var app = require(‘../index.js’);
// describe(‘GET /’, function() {
//  it(‘respond with hello world’, function(done) {
//  //navigate to root and check the the response is "hello world"
//  request(app).get(‘/’).expect(‘hello world’, done);
//  });
// });

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page
  it("should return home page",function(done){
    // calling home page
    request(server)
    .get("/")
    //.expect("Content-type",/text/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

});
