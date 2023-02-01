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
app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
  res.render('code'); 
});
 

app.post('/run', (req, res) => {	 
	code = req.body.program;
	
  // var html = 
	//   '<!DOCTYPE html>\n' +
	// 	'<html lang="en">\n' +
	// 	'	<head>\n' +
	// 	'		<title>ML5_D3 체험 페이지</title>\n' +
	// 	'		<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
		
	// 	'		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"></script>\n' +
	// 	'		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/addons/p5.sound.min.js"></script>\n' +		
	// 	'		<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>\n' +
	// 	'		<script src="https://d3js.org/d3.v4.min.js"></script>\n' +	
	// 	'	</head>\n' +
		
	// 	'	<body>\n' +
	// 	'		<h2>ML5_D3 체험 페이지</h2>\n' +
		
	// 	'		<script>\n' + code +
				
	// 	'\n		</script>\n' +

	// 	'	</body>\n' +
	// 	'</html>'
	//res.send(html);
	console.log(code);
	res.render('result', {script: code});
});

app.listen(3000, function() {});