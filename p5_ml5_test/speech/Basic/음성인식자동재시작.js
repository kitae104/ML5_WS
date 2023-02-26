// 마우스를 누를 때만 음성인식 실행
// 음성인식 객체 생성 및 초기화 ❶한국어 설정, ❷음성인식 결과 반환 시 recResult() 호출
let rec = new p5.SpeechRec('ko-KR', recResult);

function setup() {
  noCanvas();
  createP('[음성인식 시작]');
  rec.onEnd = recEnd;                 // 음성 인식 종료 시 콜백함수 recEnd() 호출  
  rec.start(true, false);             // 연속 인식, 최종 결과만 출력 
}

function recResult() {
  createDiv(rec.resultString);        // 음성 인식 결과 
  createDiv(rec.resultConfidence);    // 신뢰도 
}

function recEnd() {
  createDiv('[음성인식 재시작]');
  rec.start();                        // 음성인식 재시작
}