// 회전 운동 
let theta = 0.0;
let r = 150.0;

function setup() {
  createCanvas(300, 300);
  background(0);
}

function draw() {
  
  let x = width/2 + r * cos(theta);      // cos() 함수를 사용하여 좌우 진동
  let y = height/2 + r * sin(theta);     // sin() 함수를 사용하여 상하 진동
  fill(255, 255, 0);                     // 색을 노란색으로 설정
  ellipse(x, y, 30, 30);
  theta += 0.05;

  // 문자열 색상 설정
  fill(0);                      // 색을 빨간색으로 설정
  stroke(255, 255, 0);          // 선의 색을 노란색으로 설정
  strokeWeight(5);              // 선의 굵기를 5로 설정
  textSize(15);                 // 문자열 크기를 30으로 설정
  text('회전운동', 50, 50);   // 문자열 그리기(문자열, x, y)     
}