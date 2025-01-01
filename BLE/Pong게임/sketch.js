// 공의 랜덤 초기 위치 설정
let xBall = Math.floor(Math.random() * 300) + 50; // 공의 x축 위치
let yBall = 50; // 공의 y축 초기 위치
let xSpeed = (2, 7); // 공의 x축 속도
let ySpeed = (-7, -2); // 공의 y축 속도
let score = 0; // 점수 초기화

// 캔버스 생성
function setup() {
  createCanvas(400, 400); // 캔버스 크기: 400x400
}

// 패들의 초기 위치
xPaddle = 0;

function draw() {
  // 배경 설정
  background(0); // 검은색 배경

  // 패들 그리기
  fill('#ffffff'); // 흰색
  rect(xPaddle, 375, 90, 15); // 패들의 위치와 크기

  // 공의 움직임과 충돌 처리 함수 호출
  move(); // 공 움직임
  display(); // 공 표시
  bounce(); // 공의 벽 충돌 처리
  // resetBall(); // 공 초기화 (현재 사용 안 함)
  paddle(); // 패들과 충돌 처리

  // 점수 표시
  fill('#d9c3f7'); // 점수 색상
  textSize(24); // 텍스트 크기
  text("Score: " + score, 10, 25); // 점수 텍스트
}

// 공을 움직이는 함수
function move() {
  xBall += xSpeed; // x축 이동
  yBall += ySpeed; // y축 이동
}

// 공이 벽에 부딪힐 때 반사 처리
function bounce() {
  if (xBall < 10 || xBall > 400 - 10) { // 좌우 벽
    xSpeed *= -1; // x축 방향 반전
  }
  if (yBall < 10 || yBall > 400 - 10) { // 상하 벽
    ySpeed *= -1; // y축 방향 반전
  }
}

// 공 표시
function display() {
  fill('#d9c3f7'); // 공 색상
  ellipse(xBall, yBall, 20, 20); // 공의 위치와 크기
}

// 마우스를 클릭하면 micro:bit 연결 시도
function mousePressed() {
  microBitConnect(); // micro:bit 연결
}

// 패들과 공이 충돌했을 때 처리
function paddle() {
  if ((xBall > xPaddle && xBall < xPaddle + 90) && (yBall + 10 >= 375)) {
    xSpeed *= -1; // x축 방향 반전
    ySpeed *= -1; // y축 방향 반전
    score++; // 점수 증가
  }
}

// micro:bit로부터 메시지를 받을 때 호출되는 함수
function microBitReceivedMessage(message) {
  xPaddle = map(message, -90, 90, 0, width - 90); // 메시지를 기반으로 패들의 위치 조정
}
