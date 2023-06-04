// 상하좌우로 반사하는 원
let x = 0.0, y = 0.0, velocity_x = 4.0, velocity_y = 3.0;

function setup() {
  createCanvas(300, 300);
  background(0);
}

function draw() {  
  ellipse(x, y, 30, 30);
  x += velocity_x;
  y += velocity_y;
  if (x < 0 || x > width) {
    velocity_x *= -1;
  }
  if (y < 0 || y > height) {
    velocity_y *= -1;
  }

  // 문자열 색상 설정
  fill(0);                      // 색을 빨간색으로 설정
  stroke(255, 255, 0);          // 선의 색을 노란색으로 설정
  strokeWeight(5);              // 선의 굵기를 5로 설정
  textSize(15);                 // 문자열 크기를 30으로 설정
  text('상하좌우 반사하는 원', 50, 50);   // 문자열 그리기(문자열, x, y)     
}