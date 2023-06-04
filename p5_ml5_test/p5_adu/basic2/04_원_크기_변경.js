// 원의 크기가 점점 증가2

let r = 0;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);
  fill(255);  
  ellipse(150, 150, r, r);
  r = r + 1;
  if(r > 200){
    r = 0;
  }

  // 문자열 색상 설정
  fill(0);                      // 색을 빨간색으로 설정
  stroke(255, 255, 0);          // 선의 색을 노란색으로 설정
  strokeWeight(5);              // 선의 굵기를 5로 설정
  textSize(15);                 // 문자열 크기를 30으로 설정
  text('원 크기 증가', 150, 50);   // 문자열 그리기(문자열, x, y)     
}