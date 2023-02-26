// 음성합성으로 한국어 문장을 출력하고 음성합성 리스트 표시4
let speech = new p5.Speech();
let words = '안녕하세요';
let num = 0;

function setup() {
  noCanvas();
  speech.setLang('ko-KR');
  //speech.setVoice('Google 한국의');
  speech.setVoice('Microsoft Heami - Korean (Korean)');
  speech.listVoices();
  speech.speak(words);
}

// 마우스 누를 때 - 국가별 합성 언어 
function mousePressed() {
  let voice = random(speech.voices);    // 합성언어 랜덤 설정 
  console.log(voice);
  speech.setVoice(voice.name);  
  speech.speak(words);
  createP(voice.name);  
}