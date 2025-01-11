let serial;
let portName = 'COM3'; // 연결할 포트 이름
let video;
let predictions = [];
let knnClassifier = ml5.KNNClassifier();
let examplesAdded = false;
let outputLabel = '';
let warning = '';
const customGestures = {}; // 사용자 정의 손 모양 저장

function setup() {
	const canvas = createCanvas(640, 480);
	canvas.parent('videoCanvas');

	// 시리얼 통신 설정
	serial = new p5.WebSerial();
	serial.open(portName); // 포트 열기
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

	video = createCapture(VIDEO);
	video.size(width, height);
	video.hide();

	const handpose = ml5.handpose(video, modelReady);
	handpose.on('predict', (results) => {
		predictions = results;
	});

	// 기본 버튼 설정
	select('#rockButton').mousePressed(() =>
		addExample('👊', 'rock', '#rockBadge')
	);
	select('#paperButton').mousePressed(() =>
		addExample('🖐', 'paper', '#paperBadge')
	);
	select('#scissorsButton').mousePressed(() =>
		addExample('✌️', 'scissors', '#scissorsBadge')
	);

	// 사용자 정의 버튼 설정
	select('#addCustomButton').mousePressed(addCustomGestures);

	textAlign(LEFT);
}

function draw() {
	background(255);
	image(video, 0, 0, width, height);
	drawKeypoints();

	// 판단된 이모지와 이름 표시
	if (outputLabel) {
		fill(0, 0, 255);
		textSize(70);
		text(outputLabel, 20, height / 2 - 40);
	}

	if (examplesAdded) {
		classify();
	}
}

function modelReady() {
	console.log('Handpose 모델이 준비되었습니다!');
}

function addExample(emoji, label, badgeId) {
	if (predictions.length > 0) {
		warning = '';
		const landmarks = predictions[0].landmarks.map((p) => [p[0], p[1]]);
		knnClassifier.addExample(landmarks, label);
		examplesAdded = true;

		// 벳지 업데이트
		if (badgeId) {
			const currentCount = parseInt(select(badgeId).html()) || 0;
			select(badgeId).html(currentCount + 1);
		}
	} else {
		warning = '손을 화면 안에 위치시키세요!';
	}
}

function classify() {
	if (predictions.length > 0) {
		const landmarks = predictions[0].landmarks.map((p) => [p[0], p[1]]);
		knnClassifier.classify(landmarks, (err, result) => {
			if (result && result.label) {
				// 라벨에 따라 시리얼 데이터 전송
				let numberToSend = null;

				if (customGestures[result.label]) {
					outputLabel = `${customGestures[result.label].emoji} ${
						customGestures[result.label].name
					}`;
					numberToSend =
						Object.keys(customGestures).indexOf(result.label) + 4; // 사용자 정의 라벨은 4부터 시작
				} else if (result.label === 'rock') {
					outputLabel = '👊 바위';
					numberToSend = 1;
				} else if (result.label === 'paper') {
					outputLabel = '🖐 보';
					numberToSend = 2;
				} else if (result.label === 'scissors') {
					outputLabel = '✌️ 가위';
					numberToSend = 3;
				}

				// 시리얼로 값 전송
				if (numberToSend !== null) {
					serial.write(numberToSend.toString()); // 문자열로 변환 후 전송
          console.log(`전송된 값: ${numberToSend}`);
				}
			} else {
				outputLabel = '';
			}
		});
	}
}

function addCustomGestures() {
	const emojiInput = select('#emojiInput').value();
	const nameInput = select('#nameInput').value();

	if (emojiInput && nameInput) {
		const emojis = emojiInput.split(',').map((emoji) => emoji.trim());
		emojis.forEach((emoji) => {
			const label = `${nameInput}_${emoji}`;
			customGestures[label] = { emoji, name: nameInput };

			// 버튼 동적으로 생성
			const button = createButton(`${emoji} ${nameInput}`);
			button.addClass('btn btn-info btn-emoji');
			button.parent('#customButtons');

			// 벳지 추가
			const badge = createSpan('0');
			badge.addClass('badge bg-secondary');
			badge.id(`${label}Badge`);
			button.child(badge);

			button.mousePressed(() =>
				addExample(emoji, label, `#${label}Badge`)
			);
		});

		console.log(`새로운 손 모양 추가: ${emojis} (${nameInput})`);
		warning = '';
	} else {
		warning = '이모지와 이름을 모두 입력하세요!';
	}
}

function drawKeypoints() {
	predictions.forEach((prediction) => {
		prediction.landmarks.forEach(([x, y]) => {
			fill(0, 255, 0);
			noStroke();
			ellipse(x, y, 10, 10);
		});
	});
}
