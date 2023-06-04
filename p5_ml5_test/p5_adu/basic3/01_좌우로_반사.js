// 좌우로 반사하는 원
let x = 0, velocity = 1;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);
  ellipse(x, height/2, 30, 30);
  x += velocity;
  if (x < 0 || x > width) {
    velocity *= -1;
  }

  // 문자열 색상 설정
  fill(0);                      // 색을 빨간색으로 설정
  stroke(255, 255, 0);          // 선의 색을 노란색으로 설정
  strokeWeight(5);              // 선의 굵기를 5로 설정
  textSize(15);                 // 문자열 크기를 30으로 설정
  text('한쪽으로 반사하는 원', 50, 50);   // 문자열 그리기(문자열, x, y)     
}