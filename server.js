'use strict';
let code;
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
  res.sendFile(__dirname + "/code.html");
});
 
// 페이지를 찾을 수 없음 오류 처리
app.post('/run', (req, res, next) => {	 
	code = req.body.program;
	//res.sendFile(__dirname + "/bottom.html");	
	next();
});

app.use(function(req, res) {
  var html = 
	  '<!DOCTYPE html>' +
		'<html lang="en">' +
		'	<head>' +
		'		<title>Getting Started with ml5.js</title>' +
		'		<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
		
		'		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"></script>' +
		'		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/addons/p5.sound.min.js"></script>' +
		
		'		<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>' +
		'	</head>' +
		
		'	<body>' +
		'		<h2>머신러닝 체험 페이지</h2>' +

		'		<script>' + code +
				
		'		</script>' +

		'	</body>' +
		'</html>'
	
	res.send(html);
});

app.listen(3000, function() {});