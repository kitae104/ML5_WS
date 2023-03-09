// p5.js: 음성 제어(→온/오프 또는 점등/소등)로 정수(→0 또는 1) 송신
let rec = new p5.SpeechRec('ko-KR', recResult); 
// let port = new p5.SerialPort();				// 시리얼 통신을 위한 객체 생성
let port = new p5.WebSerial();
let result = '';
//let r = 0;


function setup() {
  createCanvas(400, 200);
  port.getPorts();			              // 포트 사용 가능 여부 확인
  port.on('noport', makePortButton);	// 기존 선택한 포트가 없으면 makePortButton() 호출
  port.on('portavailable', openPort);	// 사용 가능한 포트가 있으면 openPort() 자동 호출
  port.on('data', serialEvent);		    // 수신값이 있으면 serialEvent() 자동 호출


  rec.onEnd = recEnd;
  rec.start(true, true);
}

function makePortButton() {			              // 포트 첫 연결 시 포트 선택 버튼 생성
  let portButton = createButton('포트 선택');	// 버튼 생성
  portButton.mousePressed(choosePort);	      // 버튼 누르면 choosePort() 자동 호출
  function choosePort() {			                // 콜백함수
    port.requestPort();				                // 시리얼 포트 선택창 오픈
  }
}

function openPort() {				          // 콜백함수
  port.open().then(initiateSerial);		// 포트를 오픈 후 initiateSerial() 자동 호출
  function initiateSerial() {			    // 콜백함수
    console.log('포트 오픈');
  }
}

function serialEvent() {			// 콜백함수: 수신값이 있으면 자동 호출
  let signal = port.read();		// 수신
  //port.write(r);	        		// 송신
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