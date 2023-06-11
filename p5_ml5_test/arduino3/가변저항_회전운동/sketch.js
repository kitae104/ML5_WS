// 가변저항값 수신하여 표시
let port;
let value = 0;
let degree = 0;

function setup( ) {
  createCanvas(500, 500);
  port = new p5.SerialPort();
  port.open("COM4");
  port.on('data', serialEvent);   // 수신값이 있으면 자동 호출
}

function draw() {
  background(0);
  let theta = radians(degree);
  let x = width/2 + value * cos(theta);
  let y = height/2 + value * sin(theta);

  fill(255, 255, 0);  
  textSize(30);
  text("반지름 : " + nf(value, 3), 100, 100); // 3자리까지 표시
  ellipse(x, y, 50, 50); 
  degree++;               // 회전각도 증가

  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(15);
  text("가변저항 값으로 원 회전 운동", 100, 50);
}

// 수신값이 있으면 자동 호출
function serialEvent() {
  value = port.read();
  value = int(map(value, 0, 255, 0, width/2)); 
}