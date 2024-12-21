// 마이크로 비트에서 Web으로 버튼값 전송하기
// 나침반 방향 값 받아서 나침반에 표시하기
let serial;
let dataBuffer = [];
let maxBufferSize = 100; // 그래프에서 표시할 최대 데이터 개수
let compassDirection = 0;

function setup() {
	createCanvas(800, 500);
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

	stroke(0);
	noFill();
	beginShape();

	// 그래프의 각 포인트를 그림
	for (let i = 0; i < dataBuffer.length; i++) {
		let x = map(i, 0, maxBufferSize - 1, 0, width);
		let y = map(dataBuffer[i], 0, 370, height, 0); // y 값을 스케일링 (0-1023 데이터 범위 가정)
		vertex(x, y);
	}

	endShape();

	// 축과 텍스트 표시
	stroke(0);
	line(0, height - 20, width, height - 20); // x축
	textAlign(LEFT, TOP);
	textSize(12);
	text('실시간 데이터 그래프', 10, 10);

	fill(255, 255, 0);
	textAlign(CENTER);
	textSize(20);
	if(!isNaN(compassDirection)) {
		text('수신된 데이터 : ' + compassDirection, width / 2, 450);
	}
}

// 수신값이 있으면 자동 호출
function serialEvent() {
	let rawData = serial.readLine(); // 한 줄 데이터를 읽음
	//console.log(rawData);

	if (rawData !== '' && !isNaN(rawData)) {
		compassDirection = parseFloat(rawData); // 숫자로 변환하여 방향 저장
		compassDirection = compassDirection % 360; // 방향은 0~359도로 제한		
	}

	if(!isNaN(compassDirection)) {
		dataBuffer.push(compassDirection); // 버퍼에 추가
		console.log(compassDirection);
	}

	if (dataBuffer.length > maxBufferSize) {
		dataBuffer.shift(); // 오래된 데이터 제거
	}
}
