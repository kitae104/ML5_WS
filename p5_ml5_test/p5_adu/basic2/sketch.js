// random() 함수 및 constrain() 함수를 사용하여 원의 불규칙한 움직임을 구현
let x = 250.0, y = 250.0, velocity = 10.0;

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {  
  x += random(-velocity, velocity);
  y += random(-velocity, velocity);  
  noStroke();
  fill(random(255), random(255), random(255));
  ellipse(x, y, 30, 30);
  
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

  // 문자열 색상 설정
  fill(0);                      // 색을 빨간색으로 설정
  stroke(255, 255, 0);          // 선의 색을 노란색으로 설정
  strokeWeight(5);              // 선의 굵기를 5로 설정
  textSize(15);                 // 문자열 크기를 30으로 설정
  text('원 불규칙 이동', 50, 50);   // 문자열 그리기(문자열, x, y)     
}