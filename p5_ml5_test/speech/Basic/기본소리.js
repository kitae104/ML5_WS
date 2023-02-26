// 음성합성으로 한국어 문장 출력

let speech = new p5.Speech();

function setup() {
  noCanvas();
  speech.setLang('ko-KR');
  speech.speak('안녕하세요');
}