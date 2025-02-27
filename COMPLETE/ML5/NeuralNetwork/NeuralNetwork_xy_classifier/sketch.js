// 신경망 생성 (뇌 역할)
let brain;

function setup() {
	createP('라벨을 선택한 후 캔버스를 클릭하여 훈련 데이터를 추가하세요.');
    let canvas = createCanvas(400, 400);
	canvas.mousePressed(addData); // 캔버스를 클릭했을 때만 데이터 추가

	// HTML 요소 동적으로 생성
	createP('라벨: ').style('display', 'inline');
	let labelDropdown = createSelect().id('label');
	labelDropdown.option('A');
	labelDropdown.option('B');

	createButton('훈련').id('train').style('margin-left', '15px').mousePressed(trainModel);
    createP(''); // 줄바꿈
	createP('판별 : ').style('display', 'inline');
	createSpan('').id('classification');

	

	// 모델 생성
	const options = {
		inputs: ['x', 'y'], // 입력 데이터: x, y 좌표
		outputs: ['label'], // 출력 데이터: 레이블
		debug: true,
		task: 'classification', // 분류 작업
	};
	brain = ml5.neuralNetwork(options);

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
	brain.normalizeData(); // 데이터를 0과 1 사이로 정규화
	brain.train({ epochs: 50 }, finishedTraining); // 모델 학습 시작
}

// 모델 학습 완료 시 호출
function finishedTraining() {
	brain.classify({ x: mouseX, y: mouseY }, gotResults); // 현재 좌표를 분류
}

// 결과 받기
function gotResults(error, results) {
	if (error) {
		console.error(error);
		return;
	}

	// 분류 결과 표시
	select('#classification')
    .html(results[0].label)
    .style('color', 'red')
    .style('font-weight', 'bold')
    .style('font-size', '16px');

	// 다음 예측 실행
	brain.classify({ x: mouseX, y: mouseY }, gotResults);
}
