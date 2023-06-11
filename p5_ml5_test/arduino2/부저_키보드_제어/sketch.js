//키(UP, DOWN)로 정숫값 송신 
let port;
let freq = 0;

function setup() {
  createCanvas(500, 300);
  port = new p5.SerialPort();
  port.open("COM3");
}

function draw() {
  background(0);
  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(50);
  text("Frequency: " + nf(freq, 3), width/2, height/2);
  freq = constrain(freq, 100, 500);
  let value = map(freq, 100, 500, height, 0);
  fill(255, 0, 0, 200);
  ellipse(width/2, value, 50, 50);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    freq += 100;
  } else if (keyCode === DOWN_ARROW) {
    freq -= 100;
  }
  freq = constrain(freq, 100, 500);
  port.write(freq + "\n");
}