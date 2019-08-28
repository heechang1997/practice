//jshint esversion:6
const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    //console.log(__dirname); --> tells the current folder
});

app.listen(3001, function(){
    console.log(" simple cal server started on 3001");
})
