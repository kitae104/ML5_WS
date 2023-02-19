let value = 0;

function setup() {
  createCanvas(600, 400);
  background(100);
}

function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}

function mousePressed(e) {
  console.log(e);
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
  return true;
}

function mouseMoved() {
  value += 5;
  if (value > 255) {
    value = 0;
  }
}
