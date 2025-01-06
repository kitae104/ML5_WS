// ml5.js와 p5.js를 활용하여 동서남북 방향을 예측하는 프로그램
let classifier;
let video;
let label = 'Waiting...';


function preload() {
	// 모델 및 메타데이터 로드
	const options = {
		task: 'classification',
		inputs: [224, 224, 3], // MobileNet 입력 크기
	};
	classifier = ml5.neuralNetwork(options);
	
	// 모델 로드
	classifier.load('./my-model.json', modelLoaded);
	
	
}
function modelLoaded() {
	console.log('Custom TensorFlow.js model loaded in ml5.js!');
	classifyVideo();
}
function setup() {
	createCanvas(640, 480);
	// 웹캠 비디오 캡처
	video = createCapture(VIDEO);
	video.size(640, 480);
	video.hide();
}

function draw() {
	background(0);
	image(video, 0, 0);
	fill(255);
	textSize(24);
	textAlign(CENTER);
	text(label, width / 2, height - 16);
}

function modelReady() {
	console.log('Model Loaded!');
	classifyVideo();
}

function classifyVideo() {
	// 비디오에서 현재 프레임을 가져와 분류
	classifier.classify({ image: video }, gotResults);
}

function gotResults(error, results) {
	if (error) {
		console.error(error);
		return;
	}

	// 결과에서 가장 높은 확률의 라벨 가져오기
	if (results && results.length > 0) {
		label = results[0].label;
	}
	console.log(label);
	// 다음 프레임에서 다시 예측
	classifyVideo();
}
