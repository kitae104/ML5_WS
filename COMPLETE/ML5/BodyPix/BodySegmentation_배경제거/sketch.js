let bodySegmentation;
let video;
let segmentation;

let options = {
	maskType: 'background', // 배경을 마스킹하도록 설정
};

function preload() {
	// SelfieSegmentation 모델 로드
	bodySegmentation = ml5.bodySegmentation('SelfieSegmentation', options);
}

function setup() {
	createCanvas(640, 480);
	// 비디오 생성
	video = createCapture(VIDEO);
	video.size(640, 480);
	video.hide();

	// 비디오에서 신체 분할 시작
	bodySegmentation.detectStart(video, gotResults);
}

function draw() {
	background(0, 0, 255); // 파란색 배경 설정
	if (segmentation) {
		video.mask(segmentation.mask); // 생성된 마스크를 비디오에 적용
		image(video, 0, 0); // 마스킹된 비디오를 화면에 표시
	}
}

// 신체 분할을 위한 콜백 함수
function gotResults(result) {
	segmentation = result; // 결과를 segmentation 변수에 저장
}
