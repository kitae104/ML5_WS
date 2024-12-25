let serial;
let x = 300; // 초기 X 좌표
let y = 300; // 초기 Y 좌표
let speed = 0.05; // 가속도 데이터에 따른 이동 속도
let isClicking = false; // 클릭 여부
let isConnected = false; // 연결 상태

let circleX;
let circleY;
let circleRadius;
let circleMaximumRadius;
let circleColor;
let score = 0;
let highScore;

function setup() {
	createCanvas(600, 600);
	colorMode(HSB);
	noStroke();
	ellipseMode(RADIUS);
	textSize(36);

	// 저장된 마지막 최고 점수를 가져옴
	highScore = getItem('high score');
	if (highScore === null) {
		highScore = 0;
	}

	// WebSerial 포트 설정
	serial = new p5.WebSerial();
	serial.on('data', serialEvent);
	serial.on('error', serialError);

	// 연결 버튼 생성
	let connectButton = createButton('Connect to Serial');
	connectButton.position(10, 10);
	connectButton.mousePressed(connectToSerial);	
}

function draw() {
	background(20);

	// 원 그리기
	if (circleRadius > 0) {
		fill(circleColor);
		circle(circleX, circleY, circleRadius);
		circleRadius -= 1;

		// 점수 표시
		textAlign(RIGHT, TOP);
		fill(220);
		text(score, width - 20, 20);

		// 마우스 커서(원의 위치)
		if (isClicking) {
			fill(255, 0, 0); // 클릭 중일 때 빨간색
		} else {
			fill(0, 255, 0);
		}
		ellipse(x, y, 20, 20);

		// 마우스 클릭과 같은 동작
		if (isClicking) {
			checkCircleClicked();
		}
	} else {
		endGame();
	}
}

function startGame() {
	score = 0;
	circleMaximumRadius = min(height / 2, width / 2);
	resetCircle();
}

function endGame() {
	noLoop();

	highScore = max(highScore, score);
	storeItem('high score', highScore);

	textAlign(CENTER, CENTER);
	fill(220);
	text(
		`게임 종료
점수: ${score}
최고 점수: ${highScore}
클릭해서 다시 시작`,
		0,
		0,
		width,
		height
	);
}

function resetCircle() {
	circleRadius = circleMaximumRadius;
	circleX = random(circleRadius, width - circleRadius);
	circleY = random(circleRadius, height - circleRadius);
	circleColor = color(random(240, 360), random(40, 80), random(50, 90));
}

function checkCircleClicked() {
	let distanceToCircle = dist(x, y, circleX, circleY);
	if (distanceToCircle < circleRadius) {
		circleMaximumRadius = max(circleMaximumRadius - 1, 15);
		resetCircle();
		score += 1;
	}
}

function connectToSerial() {
	if (!isConnected) {
		serial
			.requestPort()
			.then(() => {
				serial.open();
				isConnected = true;
                // 원 초기화
	            startGame();
			})
			.catch((err) => {
				console.error('포트 연결 실패:', err);
			});
	}
}

function serialEvent() {
	let rawData = serial.readLine('\n');
	if (rawData) {
		let data = rawData.split(',');
		if (data.length === 3) {
			let accelX = parseFloat(data[0]);
			let accelY = parseFloat(data[1]);
			let button = parseInt(data[2]);

			x += accelX * speed;
			y += accelY * speed;

			x = constrain(x, 0, width);
			y = constrain(y, 0, height);

			isClicking = button === 1;
		}
	}
}

function serialError(err) {
	console.error('WebSerial 에러:', err);
}

function mousePressed() {
	if (!isLooping()) {
		startGame();
		loop();
	}
}
