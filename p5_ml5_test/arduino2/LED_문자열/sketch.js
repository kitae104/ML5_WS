// 마우스 클릭값(문자열) 송신
let port;

function setup() {
  createCanvas(500, 300);
  port = new p5.SerialPort();
  port.open("COM3");  
}

function draw() {
  background(0);
  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(30);
  text("마우스 버튼을 누르세요.", width/2, height/2);
  if (mouseIsPressed) {
    port.write("on\n");
    fill(255, 255, 0);
    textAlign(CENTER);
    textSize(30);
    text("LED ON", width/2, height/3);
  } else {
    port.write("off\n");
    fill(255, 255, 0);
    textAlign(CENTER);
    textSize(30);
    text("LED OFF", width/2, height/3);
  }
}