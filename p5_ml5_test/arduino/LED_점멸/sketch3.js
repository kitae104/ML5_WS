let port = new p5.WebSerial();

function setup() {
  createCanvas(500, 300);
  port.getPorts();                    // 포트 사용 가능 여부 확인
  port.on('noport', makePortButton);  // 기존 선택한 포트가 없으면 makePortButton() 호출
  port.on('portavailable', openPort); // 사용 가능한 포트가 있으면 openPort() 자동 호출

  background(0);
  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(30);
  text("Press on the mouse button", width/2, height/2);
}

function makePortButton() {                   // 포트 첫 연결 시 포트 선택 버튼 생성
  let portButton = createButton('포트 선택'); // 버튼 생성
  portButton.mousePressed(choosePort);        // 버튼 누르면 choosePort() 자동 호출
  function choosePort() {                     // 콜백함수
    port.requestPort();                       // 시리얼 포트 선택창 오픈
  }
}

function openPort() {                 // 콜백함수
  port.open().then(initiateSerial);   // 포트를 오픈 후 initiateSerial() 자동 호출
  function initiateSerial() {         // 콜백함수
    console.log('포트 오픈');
  }
}

function draw() {
  if (mouseIsPressed) {
    port.write(1);
  } else {
    port.write(0);
  }
}
