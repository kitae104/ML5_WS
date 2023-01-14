console.log('ml5 version:', ml5.version);

function setup() {
  let canvas = createCanvas(400, 400);  
  canvas.parent('sketch-holder');
  textSize(width / 3);
	textAlign(CENTER, CENTER);
}

function draw() {
  background(200);
  text(ml5.version, width/2, height/2);
}