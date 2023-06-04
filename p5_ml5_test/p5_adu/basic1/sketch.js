// 도(degree)를 이용하여 다양한 각의 원호를 그리기
function setup() {
  createCanvas(500, 200);
  background(200);

  arc(100, 100, 80, 80, radians(0), radians(90));     // 0도 ~ 90도
  arc(200, 100, 80, 80, radians(0), radians(180));    // 0도 ~ 180도
  arc(300, 100, 80, 80, radians(0), radians(270));    // 0도 ~ 270도
  arc(400, 100, 80, 80, radians(0), radians(360));    // 0도 ~ 360도

  // 문자열 색상 설정
  fill(0);                    // 색을 빨간색으로 설정
  stroke(255, 255, 0);                // 선의 색을 노란색으로 설정
  strokeWeight(5);                    // 선의 굵기를 5로 설정
  textSize(15);                       // 문자열 크기를 30으로 설정
  text('도(degree)를 이용하여 다양한 각의 원호를 그리기', 50, 50);     // 문자열 그리기(문자열, x, y)  
}