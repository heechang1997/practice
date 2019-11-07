/*
npm i body-parser express request

get, post : receive data
mailchimp API : send data using API
show user success or failure message
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
        url: "https://us5.api.mailchimp.com/3.0/lists/91fb0b8676",
        method: "POST",
        headers: { // for authentication
            "Authorization": "heechangkang 081a381b530db55ab97464d7e70dfe41-us5"
        },
        body: jsonData
    }

    request(options, function(error, response, body) {
        if(error) {
            console.log(error)
        }else {
            console.log(response.statusCode);
        }
    })
})

app.listen(3000, function(){
    console.log("running in port 3000")
});

// API key :  081a381b530db55ab97464d7e70dfe41-us5

// list_id : 91fb0b8676