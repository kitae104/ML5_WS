let x = 70, y = 70;
let velocity_x = 1, velocity_y = 1;

function setup() {
  createCanvas(400, 400);
  background(0); 
}

function draw() {
  //background(0); 
  ellipse(x, y, 30, 30);
  x += velocity_x;
  y += velocity_y; 
  //print(frameRate());

  // 문자열 색상 설정
  fill(0);                      // 색을 빨간색으로 설정
  stroke(255, 255, 0);          // 선의 색을 노란색으로 설정
  strokeWeight(5);              // 선의 굵기를 5로 설정
  textSize(15);                 // 문자열 크기를 30으로 설정
  text('원 이동하기', 50, 50);   // 문자열 그리기(문자열, x, y)     
}