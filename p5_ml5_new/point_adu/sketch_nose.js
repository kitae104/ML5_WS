// p5.js: 캔버스 상에서 코 포인트의 좌우 위치값(→0 또는 1) 송신

// 전역 변수 선언
let port = new p5.WebSerial();		// 시리얼 통신 객체 생성
let video, poseNet, poses = [], x = 0, y = 0, val = 0;

// 초기 설정 함수
function setup(){
  createCanvas(640, 480);             // 캔버스 생성(너비 400, 높이 300)      
  port.getPorts();			              // 포트 사용 가능 여부 확인
  port.on('noport', makePortButton);	// 기존 선택한 포트가 없으면 makePortButton() 호출
  port.on('portavailable', openPort);	// 사용 가능한 포트가 있으면 openPort() 자동 호출
  port.on('data', serialEvent);		    // 수신값이 있으면 serialEvent() 자동 호출
  
  video = createCapture(VIDEO);	      // 실시간 비디오 요소 생성
  //video.size(width, height);		    // 비디오 요소의 크기 설정
  video.hide();				                // 비디오 요소 숨김
  
  poseNet = ml5.poseNet(video, getModel);	// poseNet 객체 생성→getModel() 호출
  poseNet.on('pose', getResult);	        // 포즈 감지되면 ‘pose’ 이벤트 발생→getResult() 호출
}

function draw() {
  image(video, 0, 0);			// 캔버스에 비디오 프레임 표시

  stroke(255);
  line(width/2, 0, width/2, height);	// 캔버스 중앙 세로선 그리기

  noStroke();
  if (x < width/2) {			// 원이 캔버스의 왼편에 있는 경우
    fill(255, 0, 0);      // 빨간색
    val = 1;        
  } else {				        // 원이 캔버스의 오른편에 있는 경우
    fill(0, 255, 0);      // 초록색  
    val = 0;
  }
  if (poses.length > 0) {     // 포즈가 있는 경우
    let pose = poses[0].pose; // 첫 번째 포즈
    x = pose.nose.x;          // 코 포인트의 x좌표
    y = pose.nose.y;          // 코 포인트의 y좌표
    ellipse(x, y, 50, 50);		// 코 포인트에 원 표시
  }
}

function getModel() {			    // 콜백함수
  console.log('poseNet 모델 로딩 완료!');
}

function getResult(results) {		// 콜백함수
  poses = results;			        // 인식 결과를 전역변수인 poses에 저장
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