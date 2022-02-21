var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package
var path=require("path");
var fs=require("fs");


//server configuration
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});

var onAboutUs=function(req, res){
    res.send("Yash Gupta: 219232 roll_no");
};
var onDefault=function(req, res){
    res.send("<h1>Fabrikam Pvt. Ltd</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Human Resources</li>"+
                    " <li>Accounting</li>"+
                    " <li>Project Managment</li>"+
                    +
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
