const express = require("express");
const app = express();
const port = process.env.port || 3000;


// Middleware
const middleware = (req,res,next)=>{
    console.log(req.method +" "+req.url);   
    next();
}
app.use(middleware);

// static 
app.use(express.static(__dirname+"/resources"));
var dir = __dirname+"/resources";

// All routes

app.route("/")
    .get( (req,res)=>{
        res.sendFile(dir+"/resources/login.html");
    }); 

app.route("/profile")
    .get( (req,res)=>{
        res.sendFile(dir+"/profile.html");
    }); 

app.route("/register")
    .get( (req,res)=>{
        res.sendFile(dir+"/register.html");
    });

app.route("/changePass")
    .get( (req,res)=>{
        res.sendFile(dir+"/changPass.html");
    });

app.route("/admin")
    .get( (req,res)=>{
        res.sendFile(dir+"/admin.html");
    });


// start app 
app.listen(port, console.log(`Server start on port : ${port}`))