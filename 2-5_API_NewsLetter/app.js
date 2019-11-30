/*
npm i body-parser express request

get, post : receive data
mailchimp API : send data using API
show user success or failure message
host on heroku
*/
const bodyParser = require("body-parser")
const express = require("express")
const request = require("request")

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res) {
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;

    // console.log(firstName, lastName, email);

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            } //bracket per person 
        ]
    }

    var jsonData = JSON.stringify(data);

    var options = {
        url: "",
        method: "POST",
        headers: { // for authentication
            "Authorization": ""
        },
        body: jsonData
    }

    request(options, function(error, response, body) {
        if(error) {
            console.log(error)
            res.sendFile(__dirname + "/failure.html")
        }else {
            console.log(response.statusCode);
            if(response.statusCode === 200){
                res.sendFile(__dirname + "/success.html");
            }else {
                res.sendFile(__dirname + "/failure.html")
            }
        }
    })
})

app.post("/failure", function(req, res){
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("running in port 3000")
});


