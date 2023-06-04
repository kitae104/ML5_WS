// 다양한 크기의 원 그리기
let x = 100, y = 100, d = 80;

function setup() {
  createCanvas(300, 300);
  background(200);

  // 사칙 연산을 이용하여 원 그리기 
  noFill();
  ellipse(x%30, y%30, d%30, d%30);
  ellipse(x/2, y/2, d/2, d/2);
  ellipse(x-30, y-30, d-30, d-30);
  ellipse(x, y, d, d);
  ellipse(x+30, y+30, d+30, d+30);
  ellipse(x*2, y*2, d*2, d*2);

  // 문자열 색상 설정
  fill(0);                    // 색을 빨간색으로 설정
  stroke(255, 255, 0);                // 선의 색을 노란색으로 설정
  strokeWeight(5);                    // 선의 굵기를 5로 설정
  textSize(15);                       // 문자열 크기를 30으로 설정
  text('다양한 크기의 원 그리기', 110, 50);     // 문자열 그리기(문자열, x, y)  
}