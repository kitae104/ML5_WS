// 버튼값 수신하여 원 색상 변경
let port;
let value;

function setup() {
  createCanvas(500, 500);
  port = new p5.SerialPort();
  port.open("COM4");
  port.on('data', serialEvent);
}

function draw() {
  background(0);
  if (value === 0) {
    fill(255, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  ellipse(width/2, height/2, 200, 200);

  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(15);
  text("수신된 데이터 : " + value, width/2, 450);
}

// 수신값이 있으면 자동 호출
function serialEvent() {
  value = port.read();  
}