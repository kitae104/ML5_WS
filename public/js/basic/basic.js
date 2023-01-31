function setup(){
	createCanvas(400, 400);
	textSize(width / 3);
	textAlign(CENTER, CENTER);
}

function draw(){
	background(200);
	text(ml5.version, width/2, height/2);
}