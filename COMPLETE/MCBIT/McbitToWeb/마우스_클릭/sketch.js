let serial;
let x = 300; // 초기 X 좌표
let y = 300; // 초기 Y 좌표
let speed = 0.05; // 가속도 데이터에 따른 이동 속도
let isClicking = false; // 클릭 여부
let isConnected = false; // 연결 상태

function setup() {
	createCanvas(600, 600); // 캔버스 크기

	// WebSerial 포트 설정
	serial = new p5.WebSerial();

	// 시리얼 이벤트 핸들러
	serial.on('data', serialEvent);
	serial.on('error', serialError);

	// 연결 버튼 생성
	let connectButton = createButton('Connect to Serial');
	connectButton.position(10, 10);
	connectButton.mousePressed(connectToSerial);
}

// 사용자 클릭 시 포트 연결
function connectToSerial() {
	if (!isConnected) {
		serial
			.requestPort()
			.then(() => {
				serial.open();
				isConnected = true;
			})
			.catch((err) => {
				console.error('포트 연결 실패:', err);
			});
	}
}

function serialEvent() {
	let rawData = serial.readLine('\n');
	console.log(rawData);
	if (rawData) {
		let data = rawData.split(',');
		if (data.length === 3) {
			// 시리얼 데이터 파싱
			let accelX = parseFloat(data[0]);
			let accelY = parseFloat(data[1]);
			let button = parseInt(data[2]);

			// 마우스 이동 계산
			x += accelX * speed;
			y += accelY * speed;

			// 경계 처리
			x = constrain(x, 0, width);
			y = constrain(y, 0, height);

			// 버튼 클릭 여부
			isClicking = button === 1;
			
			if(x < 0) {
				x = 0;
			}
			if(x > width) {
				x = width;
			}
			if(y < 0) {
				y = 0;
			}
			if(y > height) {
				y = height;
			}
		}
	}
}

function serialError(err) {
	console.error('WebSerial 에러:', err);
}

function draw() {
	background(220);

	// 마우스 커서 모양
	if (isClicking) {
		fill(255, 0, 0); // 클릭 중일 때 빨간색
	} else {
		fill(0);
	}
	ellipse(x, y, 20, 20); // 마우스 커서

	// 테스트용 출력
	textAlign(LEFT, TOP);
	fill(0);
	text(`X: ${x.toFixed(1)} Y: ${y.toFixed(1)}`, 10, 40);
}
