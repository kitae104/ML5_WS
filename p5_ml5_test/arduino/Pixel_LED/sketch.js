// p5.js: 마우스 현재 위치 좌표의 픽셀값(→그레이스케일값) 송신

let port = new p5.WebSerial();		// 시리얼 통신 객체 생성
let img;
let d;
let r = 0;

function preload() {
  img = loadImage('landscape.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
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
  let signal = port.read();		// 수신
  port.write(r);	        		// 송신
}

function draw(){
  image(img, 0, 0);			          // 캔버스에 이미지 표시
  filter(GRAY);				            // GRAY 필터링(→그레이스케일 이미지로 변환) 0~255 사이의 색상을 추출을 위해 변환 
  let c = get(mouseX, mouseY);	  // 마우스의 현재 위치 좌표의 색상값 읽기
  r = red(c);				              // 색상값 중 red 요소 읽기
  d.html('그레이스케일값: ' + r); // 값 확인 
}