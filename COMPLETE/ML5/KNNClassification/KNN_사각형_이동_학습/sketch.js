let video;
let posX;
let posY;
const squareSize = 100;
const knnClassifier = ml5.KNNClassifier();
let featureExtractor;

function setup() {
	// HTML 동적 생성
	createHTML();

	// MobileNet에서 학습된 특징을 추출할 featureExtractor 생성
	featureExtractor = ml5.featureExtractor('MobileNet', modelReady);

	const canvas = createCanvas(640, 480);
	posX = width / 2;
	posY = height / 2;

	// 캔버스를 동적으로 생성된 canvasContainer에 추가
	canvas.parent('#canvasContainer');

	// 비디오 요소 생성
	video = createCapture(VIDEO);
	video.size(width, height);

	// 비디오 요소 숨기기 및 캔버스만 표시
	video.hide();

	// UI 버튼 생성
	createButtons();

	noStroke();
	fill(255, 0, 0);
}

function draw() {
	// 비디오를 좌우 반전하여 그리기
	translate(width, 0);
	scale(-1, 1);
	image(video, 0, 0, width, height);

	// 캔버스에 사각형 그리기
	rect(posX, posY, squareSize, squareSize);
}

function modelReady() {
	// 모델 로드 완료 상태 업데이트
	select('#status').html('FeatureExtractor(MobileNet 모델) 로드 완료');
}

// HTML 동적 생성 함수
function createHTML() {
	const body = select('body');	

    const result = createP(
		'KNN 분류기(MobileNet 모델)가 예측한 클래스: '
	)
		.child(createSpan('...').id('result'))
		.child(' 신뢰도: ')
		.child(createSpan('...').id('confidence'));
	body.child(result);

	const canvasContainer = createDiv().id('canvasContainer');
	body.child(canvasContainer);

	const status = createP('모델 로드 중...').id('status');
	body.child(status);

	const directions = [
		{ label: '위쪽', id: 'addClass1', emoji: '⬆️' },
		{ label: '오른쪽', id: 'addClass2', emoji: '➡️' },
		{ label: '아래쪽', id: 'addClass3', emoji: '⬇️' },
		{ label: '왼쪽', id: 'addClass4', emoji: '⬅️' },
	];

	directions.forEach(({ label, id, emoji }) => {
		body.child(
			createP(`${emoji} `).child(
				createButton(`${label} 클래스에 예제 추가`).id(id)
			)
		);
		body.child(createP(`0 ${label} 예제`).id(`example${id.slice(-1)}`));
	});

	const predictButton = createButton('예측 시작!').id('buttonPredict');
	const clearAllButton = createButton('모든 클래스 삭제').id('clearAll');
	body.child(
		createP()
			.child(predictButton)
			.child(createElement('br'))
			.child(clearAllButton)
	);	
}

// 현재 비디오 프레임을 분류기에 추가
function addExample(label) {
	const features = featureExtractor.infer(video);
	knnClassifier.addExample(features, label);
	updateCounts();
}

// 현재 프레임을 예측
function classify() {
	const numLabels = knnClassifier.getNumLabels();
	if (numLabels <= 0) {
		console.error('어떠한 레이블에도 예제가 없습니다.');
		return;
	}
	const features = featureExtractor.infer(video);
	knnClassifier.classify(features, gotResults);
}

// UI 버튼 생성
function createButtons() {
	select('#addClass1').mousePressed(() => addExample('Up'));
	select('#addClass2').mousePressed(() => addExample('Right'));
	select('#addClass3').mousePressed(() => addExample('Down'));
	select('#addClass4').mousePressed(() => addExample('Left'));
	select('#buttonPredict').mousePressed(classify);
	select('#clearAll').mousePressed(clearAllLabels);
}

// 예측 결과 처리
function gotResults(err, result) {
	if (err) {
		console.error(err);
	}

	if (result.confidencesByLabel) {
		const confidences = result.confidencesByLabel;
		if (result.label) {
			select('#result').html(result.label);
			select('#confidence').html(
				`${(confidences[result.label] * 100).toFixed(2)} %`
			);

			switch (result.label) {
				case 'Up':
					posY -= 2; // 위쪽 이동
					break;
				case 'Down':
					posY += 2; // 아래쪽 이동
					break;
				case 'Left':
					posX += 2; // 왼쪽 이동
					break;
				case 'Right':
					posX -= 2; // 오른쪽 이동
					break;
				default:
					console.log(`알 수 없는 레이블입니다: ${result.label}`);
			}
			if (posY < 0) posY = 0;
			if (posY > height - squareSize) posY = height - squareSize;
			if (posX < 0) posX = 0;
			if (posX > width - squareSize) posX = width - squareSize;
		}
	}
	classify();
}

// 각 클래스의 예제 수 업데이트
function updateCounts() {
	const counts = knnClassifier.getCountByLabel();
	select('#example1').html(`${counts['Up'] || 0} 위쪽 예제`);
	select('#example2').html(`${counts['Right'] || 0} 오른쪽 예제`);
	select('#example3').html(`${counts['Down'] || 0} 아래쪽 예제`);
	select('#example4').html(`${counts['Left'] || 0} 왼쪽 예제`);
}

// 모든 클래스의 예제 삭제
function clearAllLabels() {
	knnClassifier.clearAllLabels();
	updateCounts();
}
