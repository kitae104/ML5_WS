// 마우스를 따라 선 그리기
function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  strokeWeight(random(50));
  stroke(random(255), random(255), random(255));
  point(mouseX, mouseY);

  // 문자열 색상 설정
  fill(0);                      // 색을 빨간색으로 설정
  stroke(255, 255, 0);          // 선의 색을 노란색으로 설정
  strokeWeight(5);              // 선의 굵기를 5로 설정
  textSize(15);                 // 문자열 크기를 30으로 설정
  text('마우스 점 그리기', 50, 50);   // 문자열 그리기(문자열, x, y)     
}