/*
- npm : body parser, mongoose, ejs, express
- app.js, server code
- MongoDB : db:wikiDB, articles->title, content
*/
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

// Server Configuration
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));


// setting up DataBase
mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true });

const articleSchema = {
    title: String,
    content: String
}
const Article = mongoose.model("Article", articleSchema)


// ROUTE
app.get("/articles", function(req, res) {
    Article.find(function(err, articles) {
        if (!err){
            res.send(articles);
        }else {
            res.send(err);
        }

    })
})

// port of the server
app.listen(3000, function () {
    console.log("Server started on port 3000");
});