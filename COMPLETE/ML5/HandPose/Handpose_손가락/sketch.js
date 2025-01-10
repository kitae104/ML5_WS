// serialport 라이브러리 인스턴스를 저장할 변수
let serial;

// 사용 중인 시리얼 포트 이름 (사용자 환경에 맞게 수정 필요)
let portName = "/dev/cu.usbmodem101";

// 아두이노로 보낼 데이터 값을 저장하는 변수
let outByte = 0;

// ml5.js handpose 모델 변수
let handpose;
let video; // 비디오 캡처 객체
let hands = []; // 감지된 손 데이터 저장 배열

// handpose 모델을 미리 로드하는 함수
function preload() {
    handpose = ml5.handpose();
}

// 초기 설정 함수
function setup() {
    // 시리얼 포트 초기화
    serial = new p5.SerialPort(); // serialport 라이브러리의 새 인스턴스 생성
    serial.on("error", serialError); // 오류 발생 시 호출될 콜백 함수 설정
    serial.open(portName); // 시리얼 포트 열기

    createCanvas(640, 480); // 캔버스 생성
    video = createCapture(VIDEO); // 비디오 캡처 객체 생성
    video.size(width, height); // 비디오 크기 설정
    video.hide(); // 비디오 요소 숨기기

    // handpose 모델이 비디오 감지를 시작하도록 설정
    handpose.detectStart(video, gotHands);
}

// 손 데이터를 처리하는 콜백 함수
function gotHands(results) {
    hands = results; // 감지된 손 데이터를 저장
    // console.log(hands); // 디버깅 용도
}

// 매 프레임 그리기 함수
function draw() {
    image(video, 0, 0, width, height); // 비디오 화면을 캔버스에 출력
    drawShapes(); // 사각형 모양 그리기
    fingerCheck(); // 손가락 위치 확인 및 데이터 처리
}

// 네 가지 색상 사각형을 화면 상단에 그리는 함수
function drawShapes() {
    fill("red");
    rect(0, 0, width / 4, height / 4); // 빨간색 사각형

    fill("yellow");
    rect(width / 4, 0, width / 4, height / 4); // 노란색 사각형

    fill("green");
    rect(width / 2, 0, width / 4, height / 4); // 초록색 사각형

    fill("blue");
    rect((3 * width) / 4, 0, width / 4, height / 4); // 파란색 사각형
}

// 손가락 위치를 확인하고 적절한 데이터를 시리얼 포트로 전송하는 함수
function fingerCheck() {
    if (hands.length > 0) {
        let index = hands[0].index_finger_tip; // 검지 끝 위치 데이터

        fill("black");
        circle(index.x, index.y, 20); // 검지 끝을 원으로 표시

        // 검지 끝의 y 좌표가 사각형 영역 안에 있는지 확인
        if (index.y <= height / 4) {
            if (index.x >= 0 && index.x < width / 4) {
                outByte = 1; // 빨간색 영역
            } else if (index.x >= width / 4 && index.x < width / 2) {
                outByte = 2; // 노란색 영역
            } else if (index.x >= width / 2 && index.x < (3 * width) / 4) {
                outByte = 3; // 초록색 영역
            } else if (index.x >= (3 * width) / 4 && index.x < width) {
                outByte = 4; // 파란색 영역
            }
        } else {
            outByte = 0; // 영역 외부
        }

        console.log("outByte: ", outByte); // 현재 데이터 디버깅 출력
        serial.write(outByte); // 시리얼 포트로 데이터 전송
    }
}

// 시리얼 포트 오류 처리 함수
function serialError(err) {
    console.log("시리얼 포트에 문제가 발생했습니다: " + err);
}

// 스페이스바를 눌렀을 때 시리얼 연결 초기화
function keyPressed() {
    if (key == " ") {
        setUpSerial();
    }
}

// 시리얼 데이터를 읽어 처리하는 함수
function readSerial(data) {
    if (data != null) {
        // 시리얼 포트로 데이터를 전송
        let sendToArduino = outByte;
        writeSerial(sendToArduino);
    }
}