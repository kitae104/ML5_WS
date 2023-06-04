function setup() {
  createCanvas(600, 200);
  background(200);
  strokeWeight(5);                // 선의 굵기를 5로 설정

  noStroke();                     // 선을 그리지 않음
  ellipse(100, 100, 120, 120);    // 원 그리기(x, y, width, height)

  stroke(0);                      // 선의 색을 검정색으로 설정 gray(0)과 동일 0~255
  ellipse(200, 100, 120, 120);    // 원 그리기(x, y, width, height)

  stroke(255, 0, 0);
  ellipse(300, 100, 120, 120);

  stroke(0, 255, 0);
  ellipse(400, 100, 120, 120);

  stroke(0, 0, 255);
  ellipse(500, 100, 120, 120);

  // 문자열 색상 설정
  fill(0);                    // 색을 빨간색으로 설정
  stroke(255, 255, 0);                // 선의 색을 노란색으로 설정
  strokeWeight(5);                    // 선의 굵기를 5로 설정
  textSize(15);                       // 문자열 크기를 30으로 설정
  text('배경색과 외곽선', 50, 30);     // 문자열 그리기(문자열, x, y)  
}

function draw() { }