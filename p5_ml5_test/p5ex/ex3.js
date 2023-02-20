let x = 0;

function setup() {
  createCanvas(600, 400);
  background(100);
}

function draw() {
  //background(100);
  ellipse(x, height/2, 40, 40);  
  x++;  
}
