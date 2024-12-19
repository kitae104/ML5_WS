let circleX;
let circleY;
let circleRadius;
let circleMaximumRadius;
let circleColor;
let score = 0;
let highScore;

function setup() {
	createCanvas(640, 480);
	colorMode(HSB);
	noStroke();
	ellipseMode(RADIUS);
	textSize(36);

	// 저장된 마지막 최고 점수를 가져옴
	highScore = getItem('high score');

	// 저장된 점수가 없으면 0으로 시작
	if (highScore === null) {
		highScore = 0;
	}
}

function draw() {
	background(20);

	// 원이 완전히 줄어들지 않았을 경우
	if (circleRadius > 0) {
		// 원을 그림
		fill(circleColor);
		circle(circleX, circleY, circleRadius);
		describeElement('Circle', '무작위 색상의 줄어드는 원');

		// 원의 반지름을 줄임
		circleRadius -= 1;

		// 점수 표시
		textAlign(RIGHT, TOP);
		fill(220);
		text(score, width - 20, 20);
		describeElement('Score', `현재 점수를 표시하는 텍스트: ${score}`);
	} else {
		// 그렇지 않으면 시작/종료 화면을 표시
		endGame();
	}
}

function startGame() {
	// 점수를 0으로 초기화
	score = 0;

	// 원의 최대 반지름을 캔버스 최소 치수의 절반으로 설정
	circleMaximumRadius = min(height / 2, width / 2);
	resetCircle();
}

function endGame() {
	// 스케치를 일시 정지
	noLoop();

	// 새로운 최고 점수를 저장
	highScore = max(highScore, score);
	storeItem('high score', highScore);

	textAlign(CENTER, CENTER);
	fill(220);
	let startText = `[Circle Clicker]

        원이 사라지기 전에 클릭하세요
        점수: ${score}
        최고 점수: ${highScore}
        클릭하면 다시 시작`;
	text(startText, 0, 0, width, height);
	describeElement('Start text', `다음 텍스트를 표시: "${startText}"`);
}

function resetCircle() {
	// 원의 반지름을 최대값으로 초기화
	circleRadius = circleMaximumRadius;
	circleX = random(circleRadius, width - circleRadius);
	circleY = random(circleRadius, height - circleRadius);
	circleColor = color(random(240, 360), random(40, 80), random(50, 90));
}

function mousePressed() {
	// 게임이 일시 정지되지 않았을 경우
	if (isLooping() === true) {
		// 마우스가 원의 중심으로부터 얼마나 떨어져 있는지 계산
		let distanceToCircle = dist(mouseX, mouseY, circleX, circleY);

		// 마우스가 원의 중심으로부터 반지름보다 가까울 경우,
		// 즉 플레이어가 원을 클릭한 경우
		if (distanceToCircle < circleRadius) {
			// 최대 반지름을 줄이되, 15 이하로 줄어들지 않게 설정
			circleMaximumRadius = max(circleMaximumRadius - 1, 15);
			resetCircle();

			// 플레이어에게 점수를 추가
			score += 1;
		}
		// 게임이 일시 정지된 경우
	} else {
		// 게임을 시작하고 일시 정지를 해제
		startGame();
		loop();
	}
}
