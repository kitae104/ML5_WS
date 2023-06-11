let port;

function setup() {
  createCanvas(500, 300);
  port = new p5.SerialPort();
  port.open('COM3');
}

function draw() {
  background(0);
  let value = int(map(mouseX, 0, width, 0, 255));   // 마우스 x축 위치값(0∼255) 송신
  value = constrain(value, 0, 255);                 // value의 범위를 0~255로 제한
  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(50);
  text("Speed: " + nf(value, 3), width/2, height/2);
  port.write(value);    // 송신   
  
  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(15);
  text("<<DC 모터 속도 제어하기>>", 100, 50);
}
