// 마이크로 비트에서 Web으로 버튼값 전송하기
// 나침반 방향 값 받아서 나침반에 표시하기
let serial;
let data;
// 나침반 방향을 저장할 변수
let compassDirection = 0; // 초기 방향 (0도)

function setup() {
	createCanvas(500, 500);
	serial = new p5.WebSerial();
	serial.getPorts();
	serial.on('noport', () => {
		serial.requestPort();
		let portButton = createButton('포트선택');
		portButton.mousePressed(() => {
			serial.requestPort();
		});
	});
	serial.on('portavailable', () => {
		serial.open().then(() => {
			console.log('[포트 오픈]');
		});
	});
	serial.on('data', serialEvent); // 데이터 수신 설정
}

let cnt = 0;
function draw() {
	background(220); // 배경 초기화

	// 나침반 중심 설정
	translate(width / 2, height / 2);

	// 나침반 외곽 원 그리기
	noFill();
	stroke(0);
	ellipse(0, 0, 300, 300);

	// 나침반 방향 표시 (화살표)
	push();
	rotate(radians(compassDirection)); // 방향에 따라 회전
	stroke(255, 0, 0); // 빨간색 화살표
	strokeWeight(4);
	line(0, 0, 0, -140); // 화살표 선
	triangle(-10, -140, 10, -140, 0, -160); // 화살표 끝
	pop();

	// 나침반 텍스트 표시
	fill(0);
	textAlign(CENTER, CENTER);
	textSize(16);
	text('N', 0, -170); // 북쪽 표시
	text('E', 170, 0); // 동쪽 표시
	text('S', 0, 170); // 남쪽 표시
	text('W', -170, 0); // 서쪽 표시

	// 현재 각도 표시
	textSize(20);
	text(`각도: ${compassDirection.toFixed(1)}°`, 0, 200);

	fill(255, 255, 0);
	textAlign(CENTER);
	textSize(20);
	text('수신된 데이터 : ' + data, width / 2, 450);
}

// 수신값이 있으면 자동 호출
function serialEvent() {
	let rawData = serial.readLine(); // 한 줄 데이터를 읽음
	//rawData = rawData.trim(); // 공백 제거
	console.log(rawData);
	if (rawData !== '' && !isNaN(rawData)) {
		compassDirection = parseFloat(rawData); // 숫자로 변환하여 방향 저장
		compassDirection = compassDirection % 360; // 방향은 0~359도로 제한
	}
}
