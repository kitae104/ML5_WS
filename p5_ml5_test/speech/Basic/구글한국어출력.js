// 음성합성으로 한국어 문장을 출력하고 음성합성 리스트 표시1
let speech;

function setup() {
  noCanvas();
  speech = new p5.Speech();
  speech.onLoad = speechLoad;
}

function speechLoad() {
  speech.setLang('ko-KR');
  speech.setVoice('Google 한국의');
  speech.listVoices();
  speech.speak('안녕하세요');
  console.log("안녕하세요.");
}
