// 가변저항값 수신하여 표시
let port;
let value = 0;

function setup( ) {
  createCanvas(500, 300);
  port = new p5.SerialPort();
  port.open("COM4");
  port.on('data', serialEvent);   // 수신값이 있으면 자동 호출
}

function draw() {
  background(0);
  fill(255, 255, 0);  
  textSize(30);
  text("수신 값 : " + nf(value, 3), 10, 50); // 3자리까지 표시
  ellipse(value, height/2, 50, 50); // 원을 좌우로 이동 
  //ellipse(width/2, value, 50, 50);  // 원을 상하로 이동 
  //ellipse(value, value, 50, 50);  // 대각선 방향으로 이동 
}

// 수신값이 있으면 자동 호출
function serialEvent() {
  value = port.read();
  value = int(map(value, 0, 255, 0, width)) // 0~255를 0~width로 변환
}