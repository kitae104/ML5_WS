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
  textAlign(CENTER);
  textSize(50);
  text("Variable R: " + nf(value, 3), width/2, height/2); // 3자리까지 표시

  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(15);
  text("가변 저항을 돌리면 수신된 값을 표시하기", width/2, 50);

}

// 수신값이 있으면 자동 호출
function serialEvent() {
  value = port.read();
}