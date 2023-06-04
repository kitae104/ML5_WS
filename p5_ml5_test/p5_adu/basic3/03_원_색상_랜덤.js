// 1초마다 원의 색상이 랜덤하게 변경
let interval = 0, current_time = 0, previous_time = 0;

function setup() {
  createCanvas(300, 300);
  background(0);
}

function draw() {  
  background(0);
  current_time = millis();                  // 현재 시간을 밀리초로 반환
  interval = current_time - previous_time;  // 현재 시간과 이전 시간의 차이를 계산
  if(interval > 1000) {                     // 1초가 지났는지 확인
    previous_time = millis();               // 이전 시간을 현재 시간으로 설정
    fill(random(255), random(255), random(255));  // 랜덤한 색상으로 설정
  }
  ellipse(width/2, height/2, 200, 200);

  // 문자열 색상 설정
  //fill("red");                  // 색을 빨간색으로 설정
  stroke(255, 255, 0);          // 선의 색을 노란색으로 설정
  strokeWeight(5);              // 선의 굵기를 5로 설정
  textSize(15);                 // 문자열 크기를 30으로 설정
  text('원의 색상 랜덤 변경', 50, 50);   // 문자열 그리기(문자열, x, y)     
}