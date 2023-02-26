// 음성인식 결과 출력1 (한 번 실행)
let rec = new p5.SpeechRec('ko-KR', recResult);
rec.start(true, false);            // 연속 음성 인식 시작(false 한번만 수행)

function recResult() {              // 콜백 함수 : 음성 인식 결과 반환시 자동 호출 
  console.log(rec);   
  console.log(rec.resultString);    // 음성 인식 결과 
}