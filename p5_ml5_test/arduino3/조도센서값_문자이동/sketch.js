// 조도센서값 수신하여 문자 이동
let port;
let value = 0;

function setup( ) {
  createCanvas(500, 500);
  port = new p5.SerialPort();
  port.open("COM4");
  port.on('data', serialEvent);
}

function draw() {
  background(0);
  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(50);
  text("수신값 : " + nf(value, 3), width/2, value+50);
}

function serialEvent() {
  value = port.read();
  value = int(map(value, 0, 255, 0, height));
}