// 신경망 생성 (뇌 역할)
let brain;

function setup() {
	let canvas = createCanvas(400, 400);
	// 캔버스를 클릭했을 때만 데이터 추가
	canvas.mousePressed(addData);

	// 모델 생성
	const options = {
		inputs: ['x', 'y'], // 입력 데이터: x, y 좌표
		outputs: ['label'], // 출력 데이터: 레이블
		debug: true,
		task: 'classification', // 분류 작업
	};
	brain = ml5.neuralNetwork(options);

	// 모델 학습 버튼
	select('#train').mousePressed(trainModel);

	background(0); // 배경 색상 설정
}

// 데이터 레코드 추가
function addData() {
	// 레이블 가져오기
	let label = select('#label').value();
	// 데이터 추가
	brain.addData({ x: mouseX, y: mouseY }, { label });

	// 학습 데이터를 시각화하기 위해 원 그리기
	stroke(255);
	noFill();
	ellipse(mouseX, mouseY, 32);
	fill(255);
	textSize(16);
	textAlign(CENTER, CENTER);
	text(label, mouseX, mouseY);
}

// 모델 학습
function trainModel() {
	// ml5가 데이터를 0과 1 사이로 정규화
	brain.normalizeData();
	// 모델 학습 시작
	// Epochs: 모든 학습 데이터를 한 번 반복하는 주기
	brain.train({ epochs: 50 }, finishedTraining);
}

// 모델 학습 완료 시 호출
function finishedTraining() {
	// 현재 좌표를 분류
	brain.classify({ x: mouseX, y: mouseY }, gotResults);
}

// 결과 받기
function gotResults(error, results) {
	if (error) {
		console.error(error);
		return;
	}

	// 분류 결과 표시
	select('#classification').html(results[0].label);

	// 다음 예측 실행
	brain.classify({ x: mouseX, y: mouseY }, gotResults);
}
