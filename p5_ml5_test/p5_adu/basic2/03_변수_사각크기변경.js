// 갱신할 필요없는 상수는 const로 선언
const s = 150;

// 갱신해야 할 변수는 let으로 선언
let r = 10;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);
  rectMode(CENTER);             // 사각형의 중심점을 기준으로 설정
  stroke(0, 255, 0);            // 선의 색을 녹색으로 설정
  rect(s, s, r, r);             // 사각형 그리기(중심점 x, 중심점 y, width, height)
  
  if(r < 150){
    r++;
  } else {
    r = 10;
  }

  // 문자열 색상 설정
  fill(0);                      // 색을 빨간색으로 설정
  stroke(255, 255, 0);          // 선의 색을 노란색으로 설정
  strokeWeight(5);              // 선의 굵기를 5로 설정
  textSize(15);                 // 문자열 크기를 30으로 설정
  text('문자 출력', 150, 50);   // 문자열 그리기(문자열, x, y)     
}