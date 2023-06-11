let port;
let r = 100;

function setup() {
  createCanvas(500, 500);
  port = new p5.SerialPort();
  port.open('COM3');
}

function draw() {
  background(0);
  let d = dist(width/2, height/2, mouseX, mouseY);
  if(d < r) {
    fill(255, 0, 0);
    port.write('1');    // 송신 
  } else {
    fill(0,255,0);
    port.write('0');    // 수신
  }
  ellipse(width/2, height/2, r*2, r*2);

  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(15);
  text("<<DC 모터 제어하기>>", 100, 50);
}
