let video;
let classifier;
let classNames = [];
let predictionResult = '결과 없음';

const modelPath = './my-model.json'; // 저장된 TensorFlow.js 모델 경로
const metadataPath = './model-metadata.json'; // 메타데이터 경로

function setup() {
	const canvasContainer = document.getElementById('canvas-container');
	const canvas = createCanvas(640, 480);
	canvas.parent(canvasContainer);

	// 웹캠 설정
	video = createCapture(VIDEO);
	video.size(224, 224); // MobileNet과 호환되는 크기
	video.hide();

	// 메타데이터 로드
	loadMetadata(metadataPath)
		.then((metadata) => {
			if (!metadata.classNames || metadata.classNames.length === 0) {
				throw new Error('메타데이터에 유효한 classNames가 없습니다.');
			}
			classNames = metadata.classNames;
			loadModel();
		})
		.catch((error) => {
			console.error('메타데이터 로드 실패:', error.message);
			document.getElementById('status').innerText =
				'메타데이터 로드 실패!';
		});
}

function draw() {
	background(220);
	image(video, 0, 0, width, height);

	// 예측 결과 표시
	fill(0);
	textSize(32);
	textAlign(CENTER, CENTER);
	text(predictionResult, width / 2, height - 40);

	// 동서남북 도형 표시
	if (predictionResult.startsWith('동')) {
		fill(255, 0, 0);
		ellipse(width / 2 + 100, height / 2, 50, 50); // 동쪽
	} else if (predictionResult.startsWith('서')) {
		fill(0, 0, 255);
		ellipse(width / 2 - 100, height / 2, 50, 50); // 서쪽
	} else if (predictionResult.startsWith('남')) {
		fill(0, 255, 0);
		ellipse(width / 2, height / 2 + 100, 50, 50); // 남쪽
	} else if (predictionResult.startsWith('북')) {
		fill(255, 255, 0);
		ellipse(width / 2, height / 2 - 100, 50, 50); // 북쪽
	}
}

// 메타데이터 로드 함수
async function loadMetadata(path) {
	const response = await fetch(path);
	if (!response.ok) {
		throw new Error(
			`메타데이터 파일을 로드할 수 없습니다: ${response.statusText}`
		);
	}
	return response.json();
}

function loadModel() {
	classifier = ml5.imageClassifier(modelPath, video, () => {
		document.getElementById('status').innerText = '모델 로드 완료!';
		predict();
	});
}

function predict() {
	classifier.classify(video, (error, results) => {
		if (error) {
			console.error('예측 오류:', error.message);
			predictionResult = '예측 실패';
			return;
		}

		// 예측 결과 저장
		const topResult = results[0];
		predictionResult = `${classNames[topResult.label]} (${(
			topResult.confidence * 100
		).toFixed(2)}%)`;

		// 다음 예측 실행
		predict();
	});
}
