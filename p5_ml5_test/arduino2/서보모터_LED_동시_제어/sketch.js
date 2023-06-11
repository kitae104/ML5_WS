// 마우스 x, y축 위치 값(0∼255) 송신
let port; 
let value1 = 0, value2 = 0;

function setup() {
  createCanvas(600, 300);
  port = new p5.SerialPort();
  port.open("COM3");
}

function draw() {
  background(value2);                             // 배경색 변경
  value1 = int(map(mouseX, 0, width, 0, 180));    // 서보모터 각도 값 : 0~180도
  value1 = constrain(value1, 0, 180);             // 0~180도 회전범위 제한
  value2 = int(map(mouseY, 0, height, 0, 255));   // LED 밝기 값 : 0~255
  value2 = constrain(value2, 0, 255);             // 0~255 범위 제한

  fill(255, 255, 0);                              // 텍스트 색상(노랑)    
  textSize(30);                                   // 텍스트 크기(30)
  text("각도(좌우): " + nf(value1, 3), 10, 50);        // 텍스트 출력
  text("밝기(상하): " + nf(value2, 3), 10, 100);  // 텍스트 출력  
  fill(0, 255, 0);                                // 텍스트 색상(초록)
  text("마우스 이동(X : Servo, Y : LED)", 10, 200); // 텍스트 출력

  port.write('A');        // 문자 'A' 송신 - 동기 신호 
  port.write(value1);     // value1 송신 - 서보모터 각도 
  port.write(value2);     // value2 송신 - LED 밝기 
}