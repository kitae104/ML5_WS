// 두 개의 사각형 영역 중 마우스가 위치한 영역의 색상 변경
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);
  fill(255, 255, 0);
  if (mouseY < height/3) {
    rect(0, 0, width, height/3);
  } else if (mouseY < height* 2/3) {
    rect(0, height/3, width, height/3);
  } else {
    rect(0, height* 2/3, width, height/3);
  }


  // 문자열 색상 설정
  fill("red");                  // 색을 빨간색으로 설정
  stroke(255, 255, 0);          // 선의 색을 노란색으로 설정
  strokeWeight(5);              // 선의 굵기를 5로 설정
  textSize(15);                 // 문자열 크기를 30으로 설정
  text('위치 색상 변경', 50, 50);   // 문자열 그리기(문자열, x, y)     
}