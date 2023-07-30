// p5.js: 캔버스 상에서 엄지 손가락 포인트의 좌우 위치값(→0 또는 1) 송신

// 전역 변수 선언
let port = new p5.WebSerial();		// 시리얼 통신 객체 생성
let video, handpose, hands = [], x = 0, y = 0, val = 0;
let modelReady = false;

// 초기 설정 함수
function setup(){
  createCanvas(640, 480);             // 캔버스 생성(너비 400, 높이 300)      
  port.getPorts();			              // 포트 사용 가능 여부 확인
  port.on('noport', makePortButton);	// 기존 선택한 포트가 없으면 makePortButton() 호출
  port.on('portavailable', openPort);	// 사용 가능한 포트가 있으면 openPort() 자동 호출
  port.on('data', serialEvent);		    // 수신값이 있으면 serialEvent() 자동 호출
  
  video = createCapture(VIDEO);	      // 실시간 비디오 요소 생성
  video.hide();				                // 비디오 요소 숨김
  
  handpose = ml5.handpose(video, getModel);	// handpose 객체 생성→getModel() 호출
  handpose.on('hand', getResult);	          // 손 감지되면 ‘pose’ 이벤트 발생→getResult() 호출
}

function draw() {
  image(video, 0, 0);			// 캔버스에 비디오 프레임 표시

  stroke(255);
  line(width/2, 0, width/2, height);	// 캔버스 중앙 세로선 그리기

  if (!modelReady) {			// 모델 로딩이 완료되기 전인 경우
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text('handPose 모델 로딩 중!', width / 2, height / 2);
  }

  noStroke();
  if (x < width/2) {			// 원이 캔버스의 왼편에 있는 경우
    fill(255, 0, 0);      // 빨간색
    val = 1;        
  } else {				        // 원이 캔버스의 오른편에 있는 경우
    fill(0, 255, 0);      // 초록색  
    val = 0;
  }

  if (hands.length > 0) {     // 손이 감지된 경우 
    let annotations = hands[0].annotations;
    x = annotations.thumb[3][0];
    y = annotations.thumb[3][1];
    ellipse(x, y, 30, 30);		// 엄지손가락 끝 포인트에 원 표시
  }
}

function getModel() {			    // 콜백함수
  modelReady = true;
  console.log('handpose 모델 로딩 완료!');
}

function getResult(results) {		// 콜백함수
  hands = results;			        // 인식 결과를 전역변수인 poses에 저장
}

function serialEvent() {				// 콜백함수: 수신값이 있으면 자동 호출
  let signal = port.read();			// 수신
  port.write(val);	        		// 송신값: 0∼255
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