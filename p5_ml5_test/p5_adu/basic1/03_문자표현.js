function setup() {
  createCanvas(300, 300);     // 출력 크기 설정(가로, 세로)
  background(200);            // 배경색 설정(회색) 

  // 문자 표현
  textSize(30);                     // 글자 크기를 30으로 설정     
  text(7, 10, 50);                  // 숫자 7을 (10, 50)에 출력
  text('H', 10, 100);               // 문자 H를 (10, 100)에 출력
  text('Hello, p5.js!', 10, 150);   // 문자열 Hello, p5.js!를 (10, 150)에 출력

  // 문자열 색상 설정
  fill(0);                    // 색을 빨간색으로 설정
  stroke(255, 255, 0);                // 선의 색을 노란색으로 설정
  strokeWeight(5);                    // 선의 굵기를 5로 설정
  textSize(15);                       // 문자열 크기를 30으로 설정
  text('문자 작성', 50, 50);     // 문자열 그리기(문자열, x, y)  
}

function draw() { }