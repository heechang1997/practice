//jshint esversion:6
// bodyparser
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    //console.log(__dirname); --> tells the current folder
});

app.post("/", function(req, res){

    // console.log(req.body.num1); // be able to get data from html

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("result : "+ result);

});

app.listen(3000, function(){
    console.log("simple cal server started on 3000");
});
