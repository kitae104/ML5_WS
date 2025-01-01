let data; // micro:bit로부터 받은 데이터

// 캔버스 생성
function setup() {
  createCanvas(400, 400); // 캔버스 크기: 400x400
}

function draw() {
  // 배경 설정
  background(0); // 검은색 배경

  // 점수 표시
  fill('#d9c3f7'); // 점수 색상
  textSize(24); // 텍스트 크기
  text("Data: " + data, 100, height/2); // 점수 텍스트
}

// 마우스를 클릭하면 micro:bit 연결 시도
function mousePressed() {
  microBitConnect(); // micro:bit 연결
}

// micro:bit로부터 메시지를 받을 때 호출되는 함수
function microBitReceivedMessage(message) {
  data = map(message, -90, 90, 0, width - 90); // 메시지를 기반으로 패들의 위치 조정
}
