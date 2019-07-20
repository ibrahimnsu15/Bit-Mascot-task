const express = require("express");
const app = express();
const port = process.env.port || 3000;


// Middleware
const middleware = (req,res,next)=>{
    console.log(req.method +" "+req.url);   
    next();
}
app.use(middleware);

// All routes

app.route("/")
    .get( (req,res)=>{
        res.sendFile("login.html");
    }); 

app.route("/profile")
    .get( (req,res)=>{
        res.sendFile("profile.html");
    }); 

app.route("/register")
    .get( (req,res)=>{
        res.sendFile("register.html");
    });

app.route("/changePass")
    .get( (req,res)=>{
        res.sendFile("changePassword.html");
    });

app.route("/admin")
    .get( (req,res)=>{
        res.sendFile("admin.html");
    });


// start app 
app.listen(port, console.log(`Server start on port : ${port}`))