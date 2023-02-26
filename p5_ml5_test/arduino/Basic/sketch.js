// p5.js: 음성 제어(→온/오프 또는 점등/소등)로 정수(→0 또는 1) 송신
let rec = new p5.SpeechRec('ko-KR', recResult); 
let port = new p5.SerialPort();				// 시리얼 통신을 위한 객체 생성
let result = '';

function setup() {
  createCanvas(400, 200);
  port.open('COM3');            // 포트 열기
  rec.onEnd = recEnd;
  rec.start(true, true);
}

function draw() {
  background(0);
  fill(255, 255, 0);
  textSize(20);
  text('인식단어: 온(점등), 오프(소등)', 20, 40);
  
  if (result.indexOf('온') !== -1 || result.indexOf('점등') !== -1) { 
    fill(255, 0, 0);
    text('점등되었습니다', 120, 120);
    port.write(1);
  } else if (result.indexOf('오프') !== -1 || result.indexOf('소등') !== -1) { 
    fill(255, 255, 255);
    text('소등되었습니다', 120, 120);
    port.write(0);
  } else {
    text('온(점등), 오프(소등)를 말해 주세요', 50, 120);
  } 
}

function recResult() {
  result = rec.resultString;
  console.log(result);
}

function recEnd() {
  console.log('[음성인식 재시작]');
  rec.start();
}