// ml5.js와 p5.js를 사용하여 행동을 예측하는 코드

let video; // 비디오 요소
let classifier; // ml5.js 분류기
let label = 'Waiting...'; // 분류된 행동 레이블
const classNames = ['AA', 'BB', 'CC', 'DD']; // 행동 클래스

async function preload() {
	try {
		const modelPath = 'my-model.json';
		classifier = ml5.neuralNetwork({ task: 'classification' });
		await classifier.load(modelPath);
		console.log('Model loaded successfully');
		modelLoaded();
	} catch (err) {
		console.error('Error loading model:', err);
	}
}

function setup() {
	createCanvas(640, 480);
	video = createCapture(VIDEO);
	video.size(640, 480);
	video.hide(); // 비디오 요소 숨기기
}

function draw() {
	background(0);
	image(video, 0, 0); // 비디오 출력
	fill(255);
	textSize(24);
	textAlign(CENTER, CENTER);
	text(label, width / 2, height - 20); // 행동 레이블 표시
}

// 모델이 로드되었을 때 호출
function modelLoaded() {
	console.log('Model Loaded!');
	classifyVideo();
}

// 비디오를 분류
function classifyVideo() {
	const input = video.elt; // HTML 비디오 요소
	classifier.classify(input, gotResults);
}

// 분류 결과를 처리
function gotResults(error, results) {
	if (error) {
		console.error(error);
		return;
	}

	if (results && results[0]) {
		label = classNames[results[0].label]; // 결과를 클래스 이름과 매핑
	}

	classifyVideo(); // 다시 분류
}
