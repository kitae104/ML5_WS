// 문자 세 개 출력
let c1 = 'A', c2 = 'B', c3 = 'C';
let x = 70, y = 70;
let s = '안녕, 한글 처리 테스트!';

function setup() {
  createCanvas(300, 300);
  textFont('궁서');              // 폰트 설정  
  background(200);

  // 문자 출력
  textSize(50);
  text(c1, x, y);
  text(c2, x*2, y*2);
  text(c3, x*3, y*3);

  // 문자열 출력    
  fill("red"); 
  textSize(20);
  text(s, x-30, y+180);

  print(s);
  console.log(s);  

  // 문자열 색상 설정
  fill(0);                      // 색을 빨간색으로 설정
  stroke(255, 255, 0);          // 선의 색을 노란색으로 설정
  strokeWeight(5);              // 선의 굵기를 5로 설정
  textSize(15);                 // 문자열 크기를 30으로 설정
  text('문자 출력', 150, 50);   // 문자열 그리기(문자열, x, y)  
}