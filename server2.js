'use strict';

const express = require('express');
const path = require('path');
const {spawn} = require('child_process');
const bodyParser = require("body-parser");
const fs = require('fs').promises;
// const cors = require('cors');

const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));

// app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post('/run', (req, res) => {  
	var code = req.body.data;
  
	console.log("code : " + code);
  
	fs.writeFile('public/js/sketch.js', code)
	.then(() => {
	  return fs.readFile('public/js/sketch.js')
	})
	.then((data) => {
	  res.setHeader("Access-Control-Allow-Origin", "*");
	//   res.setHeader("Access-Control-Allow-Credentials", "true");
	  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	  res.setHeader("Access-Control-Max-Age", "3600");
	  res.setHeader("Access-Control-Allow-Headers", 
	  				"Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization");
	  res.send("OK");  
	})
	.catch((err) => {
	  console.error(err);
	});	
});

app.get('/result', function(req, res){
	res.sendFile(__dirname + "/result.html");
});

app.listen(3000, function () {
  console.log("3000번 서버 실행....");
});