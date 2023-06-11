// 마우스 x축 위치값(0∼255) 송신
let port;

function setup() {
  createCanvas(500, 300);
  port = new p5.SerialPort();
  port.open("COM3");
}

function draw() {
  background(0);
  let value = int(map(mouseX, 0, width, 0, 255));
  value = constrain(value, 0, 255);
  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(50);
  text("Brightness: " + nf(value, 3), width/2, height/2);
  port.write(value);
}