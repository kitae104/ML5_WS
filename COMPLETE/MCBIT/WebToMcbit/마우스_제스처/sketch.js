// 1단계: 데이터를 로드하거나 데이터를 생성
let data = [
	{ x: 0.99, y: 0.02, label: '오른쪽' },
	{ x: 0.76, y: -0.1, label: '오른쪽' },
	{ x: -1.0, y: 0.12, label: '왼쪽' },
	{ x: -0.9, y: -0.1, label: '왼쪽' },
	{ x: 0.02, y: 0.98, label: '아래쪽' },
	{ x: -0.2, y: 0.75, label: '아래쪽' },
	{ x: 0.01, y: -0.9, label: '위쪽' },
	{ x: -0.1, y: -0.8, label: '위쪽' },
];

let serial; // 시리얼포트 객체
let classifier;
let label = '학습중...';

let start, end;

function setup() {
	createCanvas(640, 240);

	// 시리얼 포트 객체 생성
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

	// 이 예제가 모든 브라우저에서 작동하려면
	// "webgl" 또는 "cpu" 백엔드를 설정해야 함
	ml5.setBackend('webgl');

	// 2단계: 신경망 옵션 설정
	let options = {
		task: 'classification', // 분류 작업 설정
		debug: true, // 디버그 모드 활성화
	};

	// 3단계: 신경망 초기화
	classifier = ml5.neuralNetwork(options);

	// 4단계: 신경망에 데이터 추가
	for (let i = 0; i < data.length; i++) {
		let item = data[i];
		let inputs = [item.x, item.y]; // 입력 데이터
		let outputs = [item.label]; // 출력 데이터
		classifier.addData(inputs, outputs);
	}

	// 5단계: 데이터를 정규화
	classifier.normalizeData();

	// 6단계: 신경망 학습
	classifier.train({ epochs: 100 }, finishedTraining);
}

// 7단계: 학습된 모델 사용
function finishedTraining() {
	label = '준비 완료';
}

// 8단계: 분류 수행

function draw() {
	background(200);
	textAlign(CENTER, CENTER);
	textSize(64);
	text(label, width / 2, height / 2);
	if (start && end) {
		strokeWeight(8);
		line(start.x, start.y, end.x, end.y); // 시작점과 끝점을 연결하는 선을 그림
	}
}

function mousePressed() {
	start = createVector(mouseX, mouseY); // 시작점 설정
	end = createVector(mouseX, mouseY); // 끝점 초기화
}

function mouseDragged() {
	end = createVector(mouseX, mouseY); // 마우스 드래그 시 끝점 업데이트
}

function mouseReleased() {
	let dir = p5.Vector.sub(end, start); // 끝점과 시작점의 차이 계산
	dir.normalize(); // 방향 벡터 정규화
	let inputs = [dir.x, dir.y];
	console.log(inputs);
	classifier.classify(inputs, gotResults); // 분류 수행
}

// 9단계: 분류 결과를 처리하는 함수 정의
function gotResults(results) {
	label = results[0].label; // 결과 레이블 업데이트
	console.log(label);

	if (label === '왼쪽') {
		serial.write('L');
	} else if (label === '오른쪽') {
		serial.write('R');
	} else if (label === '위쪽') {
		serial.write('U');
	} else if (label === '아래쪽') {
		serial.write('D');
	}
}
