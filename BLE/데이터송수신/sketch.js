let connectButton, disconnectButton, sendButton, inputField; // UI 요소
let receivedMessages = ""; // 수신된 메시지를 저장할 변수

function setup() {
  createCanvas(400, 300); // 캔버스 크기 설정
  
  // "Connect to micro:bit" 버튼 생성 및 위치 설정
  connectButton = createButton('micro:bit 연결');
  connectButton.position(10, 10); // 버튼 위치
  connectButton.mousePressed(microBitConnect); // 버튼 클릭 시 micro:bit 연결 함수 호출

  // "Disconnect" 버튼 생성 및 위치 설정
  disconnectButton = createButton('연결 해제');
  disconnectButton.position(150, 10); // 버튼 위치
  disconnectButton.mousePressed(microBitDisconnect); // 버튼 클릭 시 micro:bit 연결 해제 함수 호출

  // 메시지를 입력할 입력 필드 생성 및 위치 설정
  inputField = createInput('');
  inputField.position(10, 50); // 입력 필드 위치

  // "Send Message" 버튼 생성 및 위치 설정
  sendButton = createButton('메시지 전송');
  sendButton.position(200, 50); // 버튼 위치
  sendButton.mousePressed(() => {
    const message = inputField.value(); // 입력 필드에서 메시지 가져오기
    microBitWriteString(message+"\n"); // 메시지를 micro:bit로 전송
    inputField.value(''); // 입력 필드 초기화
  });
}

function draw() {
  background(220); // 배경 색상 설정 (밝은 회색)
  
  textSize(16); // 텍스트 크기 설정
  text('수신된 메시지:', 10, 100); // "수신된 메시지" 텍스트 표시
  text(receivedMessages, 10, 130, 380, 150); // 수신된 메시지 표시 (줄 바꿈 포함)
}

// micro:bit에서 메시지를 수신했을 때 호출되는 함수
function microBitReceivedMessage(message) {
  receivedMessages += message + '\n'; // 수신된 메시지를 누적
}
