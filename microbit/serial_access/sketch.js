let port = new p5.WebSerial();		// 시리얼 통신 객체 생성
let signal;

function setup() {
  createCanvas(400, 400);
  background(220);
  port.getPorts();			              // 포트 사용 가능 여부 확인
  port.on('noport', makePortButton);	// 기존 선택한 포트가 없으면 makePortButton() 호출
  port.on('portavailable', openPort);	// 사용 가능한 포트가 있으면 openPort() 자동 호출
  port.on('data', serialEvent);		    // 수신값이 있으면 serialEvent() 자동 호출
  
  d = createDiv('');
  d.style('font-size', '20px');		    // 폰트 크기(20픽셀) 설정
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
  signal = port.read();		// 수신값을 읽어서 signal 변수에 저장
  //console.log(signal);			  // 콘솔에 수신값 출력
}

function draw(){
  background(220);
  d.html('수신값: ' + signal);	// 수신값 출력
}