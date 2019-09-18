const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

/*
app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
*/

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmi = weight / (height * weight);

    res.send("your bmi is : " + bmi);

});

app.listen(3001);
