/*

npm init : for package.json
nodemon : to make server run and affect changes

*/

// jshint esversion:6

const express = require("express");
const app = express();

// '/' means root, home page
// when the server gets request, response is from 
app.get("/", function(req, res){
    //console.log(request);
    res.send("hello, i am heechang");
});
app.get("/about", function(req, res){
    res.send("contact me at: hee@");
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});
//  const port = 8000;



