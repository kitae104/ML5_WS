// p5.js: 인식 결과(→얼굴, 주먹, 손바닥)에 따라 0∼255 범위의 값(증감) 송신 
// modelURL을 사용자 스스로 만든 모델의 링크로 대체해야 함

// 전역 변수 선언
let modelURL = 'https://teachablemachine.withgoogle.com/models/AMEfuoK5q/';
let port = new p5.WebSerial();		// 시리얼 통신 객체 생성
let classifier, video, flippedVideo, d, label = '모델 로딩 중', val = 0;

// 미리 학습된 모델을 사용하여 이미지 분류
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup(){
  createCanvas(640, 480);             // 캔버스 생성(너비 400, 높이 300)      
  port.getPorts();			              // 포트 사용 가능 여부 확인
  port.on('noport', makePortButton);	// 기존 선택한 포트가 없으면 makePortButton() 호출
  port.on('portavailable', openPort);	// 사용 가능한 포트가 있으면 openPort() 자동 호출
  port.on('data', serialEvent);		    // 수신값이 있으면 serialEvent() 자동 호출
  
  video = createCapture(VIDEO);	      // 실시간 비디오 요소 생성
  video.size(width, height);		      // 비디오 요소의 크기 설정
  video.hide();				                // 비디오 요소 숨김
  classifyVideo();			              // getResult() 호출 → 인식 결과 출력

  d = createDiv('');                  // <div> 요소 생성
  d.style('font-size', '20px');		    // 폰트 크기(20픽셀) 설정
}

function draw() {
  image(flippedVideo, 0, 0, width, height);	// 캔버스에 비디오 프레임 표시
  d.html(label + ', 송신값: ' + val);       // <div> 요소에 인식 결과와 송신값 표시
  if (label === '얼굴') {				            // 얼굴 인식 시 val값 증감 없음
    val += 0;
  } else if (label === '주먹') {			      // 주먹 인식 시 val값 증가
    val += 2;
  } else if (label === '손바닥') {			    // 손바닥 인식 시 val값 감소
    val -= 2;
  }
  val = constrain(val, 0, 255);			        // 송신값 범위 제한: 0∼255
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

// 비디오 프레임을 분류하여 인식 결과 출력
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);		      // 수평으로 반전된 이미지
  classifier.classify(flippedVideo, getResult);	// flippedVideo가 주어지면 getResult() 호출
  flippedVideo.remove();			                  // 생성된 flippedVideo 요소 제거
}

// 인식 결과 출력
function getResult(error, results) {		// 콜백함수
  if (error) {					                // 인식 오류 시
    console.log(error);
    return;					                    // 함수 실행 종료
  } else {					                    // 인식 성공 시
    label = results[0].label;			      // 인식 결과
    classifyVideo();				            // getResult() 재호출함으로써 반복 인식
  }
}