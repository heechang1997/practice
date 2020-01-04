//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose")

// express server
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.listen(3000, function () {
    console.log("server running on port 3000");
});


// DATABASE setup
mongoose.connect("mongodb://localhost:27017/userDB"), {userNewUrlParser: true};

const userSchema = {
    email: String,
    password: String
};

const User = new mongoose.model("User", userSchema);

// ROUTE
// GET
app.get("/", function(req, res){
    res.render("home")
});

app.get("/login", function (req, res) {
    res.render("login")
});

app.get("/register", function (req, res) {
    res.render("register")
});


// POST
app.post("/register", function(req, res) {
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });
    newUser.save(function (err) {
        if (err) {
            console.log(err)
        } else {
            res.render("secrets");
        }
    });
});

app.post("/login", function(req, res) {
    const username = req.body.username;
    const password = req.body.username;

    User.findOne({email: username}, function(err, FoundUser){
        if(err){
            console.log(err)
        } else {
            if(FoundUser){
                if(FoundUser.password === password){
                    res.render("secrets")
                }else {
                    console.log("password is incorrect")
                }
            }
        }
    })
})

    