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
  
	// 웹페이지 만들어 호출하기 


});

app.get('/result', function(req, res){
	res.sendFile(__dirname + "/result.html");
});

app.listen(3000, function () {
  console.log("3000번 서버 실행....");
});