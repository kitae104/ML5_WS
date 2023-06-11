// 버튼값 수신하여 원 색상 변경2
let menu, port, value;

function setup() {
  createCanvas(500, 500);
  port = new p5.SerialPort();
  port.list();
  port.on('list', gotList);		// 포트 리스트를 얻으면 콜백함수 호출
  port.on('data', serialEvent);		// 데이터를 수신하면 콜백함수(gotData) 호출
}

function draw() {
  background(0);
  if (value === 0) {
    fill(255, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  ellipse(width/2, height/2, 200, 200);
}

function serialEvent() {		// 데이터 수신하면 콜백함수(serialEvent) 실행
  value = port.read();
}

function gotList(list) {		// 포트 리스트를 얻으면 콜백함수(gotList) 실행
  menu = createSelect();		// 드롭다운 메뉴 생성
  menu.changed(openPort);		// ❶ 메뉴 변경 시 콜백함수(→openPort) 호출
  menu.position(10, 30);		// 드롭다운 메뉴의 위치 설정
  menu.style('font-size', '20px');	// 드롭다운 메뉴의 폰트 크기
  menu.option('Choose a port');	// 메뉴의 옵션(제목) 추가
  for (let i = 0; i < list.length; i++) {  
    menu.option(list[i]);		// 메뉴의 옵션(포트리스트) 추가
    print(i + " " + list[i]);
  }
}

function openPort() {		// ❷ 메뉴 변경 시 콜백함수(→openPort) 실행
  let portName = menu.value();	// 시리얼 포트명 저장
  port.open(portName);		// 시리얼 포트 열기
}