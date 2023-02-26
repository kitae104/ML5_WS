// 입력창을 통해 다른 문장 출력하기 
let speech = new p5.Speech();
let myInput, button, words = '안녕하세요';

function setup() {
  noCanvas();
  speech.setLang('ko-KR');
  speech.setVoice('Google 한국의');

  myInput = createInput(words);       // 입력 창 생성 
  button = createButton("Text To Speech");
  button.mousePressed(textToSpeech);
}

function textToSpeech() {
  speech.speak(myInput.value());    // 입력된 단어 말하기 
  createP(myInput.value());         // 화면에 보이기 
}