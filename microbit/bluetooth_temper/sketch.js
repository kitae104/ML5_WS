let backgroundColor = "red";
let tempMap = 0.0;
let temp;

function setup() {
  createCanvas(400, 400);
  background("black");
}

function draw() {
  var lcol = lerpColor(color("white"), color(backgroundColor), tempMap);
  background(lcol);
  text(temp, 20, 100, 100, 100);      // text, x, y, width, height
  textSize(32);                       // 글자 크기
  fill("white");                      // 글자 색
  stroke("black")                     // 테두리 색
  strokeWeight(4);                    // 테두리 두께
}

function mousePressed() {
  microBitConnect();
}

// 마이크로비트에서 메시지를 받으면 호출되는 함수
function microBitReceivedMessage(message) {  
  temp = int(message);              // 문자열을 정수로 변환
  if (temp > 35) {
    backgroundColor = "red";
  } else {
    backgroundColor = "blue";
  }
  var absTemp = abs(temp - 20);
  tempMap = map(absTemp, 0, 10, 0, 1);
}
