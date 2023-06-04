// sin() 함수를 사용하여 원의 상하 진동1
let theta = 0.0;

function setup() {
  createCanvas(500, 300);
}

function draw() {
  background(0);
  //let y = height/2 + height/2 * sin(theta);       // sin() 함수를 사용하여 상하 진동
  let y = map(sin(theta), -1, 1, 15, height - 15);  // sin(입력, -1, 1, 0, height) 매핑 
  fill(255, 255, 0);                                // 색을 노란색으로 설정
  ellipse(width/2, y, 30, 30);
  theta += 0.1;

  // 문자열 색상 설정
  fill(0);                      // 색을 빨간색으로 설정
  stroke(255, 255, 0);          // 선의 색을 노란색으로 설정
  strokeWeight(5);              // 선의 굵기를 5로 설정
  textSize(15);                 // 문자열 크기를 30으로 설정
  text('sin() 함수를 사용하여 상하 진동', 50, 50);   // 문자열 그리기(문자열, x, y)     
}