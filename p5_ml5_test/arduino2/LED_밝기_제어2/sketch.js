// 실행 화면의 중앙선을 기점으로 마우스가 중앙으로 다가올 수록 배경색 및 LED가 밝아지고 
// 좌우로 갈수록 어두워지는 프로그램
let port;
let value = 0;

function setup() {
  createCanvas(500, 300);
  port = new p5.SerialPort();
  port.open("COM3");
}

function draw() {
  background(value);

  // 중앙선 그리기 
  stroke(255, 0, 0);
  fill(0, 255, 0);
  line(width/2, 0, width/2, height);

  // 밝기값 출력 
  textAlign(CENTER);
  textSize(50);
  text("Brightness: " + nf(value, 3), width/2, height/2);

  // 마우스 움직임에 따른 밝기값 송신 
  if(mouseX < width/2) {
    value = int(map(mouseX, 0, width/2, 0, 255));
    port.write(value);
  } else {
    value = int(map(mouseX, width/2, width, 255, 0));
    // 마우스 움직임에 따른 값의 범위를 제한하기 
    value = constrain(value, 0, 255);
    port.write(value);
  }
}  