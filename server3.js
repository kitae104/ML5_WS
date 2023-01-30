'use strict';
let code;
const express = require('express');
const path = require('path');
const {spawn} = require('child_process');
const bodyParser = require("body-parser");
const fs = require('fs').promises;
const expressLayouts = require('express-ejs-layouts');


// const cors = require('cors');

const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));

// 레이아웃 설정 
app.use(expressLayouts);

app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.set('layout','./layouts/main');
//app.set('layout extractScripts', true);

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
  res.render('code', {title: 'EJS 테스트', layout: './layouts/main'});
});

app.get('/test', function (req, res) {
  res.render('test', {title: 'Test 페이지', layout: './layouts/sidebar'});
});
 

app.post('/run', (req, res) => {	 
	code = req.body.program;
	
  var html = 
	  '<!DOCTYPE html>\n' +
		'<html lang="en">\n' +
		'	<head>\n' +
		'		<title>ML5_D3 체험 페이지</title>\n' +
		'		<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
		
		'		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"></script>\n' +
		'		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/addons/p5.sound.min.js"></script>\n' +		
		'		<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>\n' +
		//'		<script src="https://d3js.org/d3.v7.min.js"></script>\n' +	
		'		<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.js"></script>\n' +	
		'	</head>\n' +
		
		'	<body>\n' +
		'		<h2>ML5_D3 체험 페이지</h2>\n' +
		
		'		<script>\n' + code +
				
		'\n		</script>\n' +

		'	</body>\n' +
		'</html>'
	
	res.send(html);
});

app.listen(3000, function() {});