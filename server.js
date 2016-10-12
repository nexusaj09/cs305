'use strict'
var express = require('express');
var app = express();
var path = require('path');

app.get("/login.html",function(req,res)
{
	res.sendFile(path.join(__dirname + '/login.html'));
});
app.get("/register.html",function(req,res)
{
	res.sendFile(path.join(__dirname + '/register.html'));
});
app.get("/home.html",function(req,res)
{
	res.sendFile(path.join(__dirname + '/home.html'));
});
app.get("/images.jpg",function(req,res)
{
	res.sendFile(path.join(__dirname + '/images.jpg'));
});
app.get('/cs305/des.css',function(req,res)
{
	res.sendFile(__dirname + '/des.css');
});
app.get("/trial.html",function(req,res)
{
	res.sendFile(path.join(__dirname + '/trial.html'));
});
app.get("/lime.json",function(req,res)
{
	res.sendFile(path.join(__dirname + '/lime.json'));
});
app.use(express.static('/cs305/images.jpg'))
app.listen(3000,function()
{console.log('example');
	});	
	