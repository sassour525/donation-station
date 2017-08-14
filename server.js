var express = require("express");  //include express
var bodyParser = require("body-parser"); //include body-parser
var path = require("path"); //include path
var htmlRoutes = require("./app/routing/htmlRoutes.js"); //include routes from htmlRoutes file
var apiRoutes = require("./app/routing/apiRoutes.js"); //include routes from apiRoutes file
var methodOverride = require('method-override');

var app = express(); //create express app
var PORT = process.env.PORT || 3000; //set port makes it useable for heroku

//include public folder contents
app.use(express.static(__dirname + "/public"));

//used to parse incomming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var db = require('./models');

app.use(methodOverride("_method"));

//get HTML routes
htmlRoutes(app);
//get API routes
apiRoutes(app);

//intantiate app to listen on port
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});

