// p5.js: 마우스 클릭값(정수: 0,1) 송신
let port;

function setup() {
  createCanvas(500, 300);
  port = new p5.SerialPort();
  port.open('COM4');

  background(0);
  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(30);
  text("Press on the mouse button", width/2, height/2);
}

function draw() {
  if (mouseIsPressed) {
    port.write(1);
  } else {
    port.write(0);
  }
}


