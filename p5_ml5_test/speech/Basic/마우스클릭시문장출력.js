// 음성합성으로 한국어 문장을 출력하고 음성합성 리스트 표시4
let speech = new p5.Speech();
let words = '안녕하세요';

function setup() {
  noCanvas();
  speech.setLang('ko-KR');
  //speech.setVoice('Google 한국의');
  speech.setVoice('Microsoft Heami - Korean (Korean)');
  speech.listVoices();
  speech.speak(words);
}

// 마우스 누를 때 - 해당 단어를 말하고 화면에 문장 출력 
function mousePressed() {
  speech.speak(words);
  createP(words);
}