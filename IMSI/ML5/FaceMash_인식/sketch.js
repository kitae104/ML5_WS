let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

function preload() {
	// faceMesh 모델 로드
	faceMesh = ml5.faceMesh(options);
}

function setup() {
	createCanvas(640, 480);
	// 웹캠 비디오 생성 및 숨기기
	video = createCapture(VIDEO);
	video.size(640, 480);
	video.hide();
	// 웹캠 비디오에서 얼굴 감지 시작
	faceMesh.detectStart(video, gotFaces);
}

function draw() {
	// 웹캠 비디오 그리기
	image(video, 0, 0, width, height);

	// 추적된 모든 얼굴의 포인트를 그리기
	for (let i = 0; i < faces.length; i++) {
		let face = faces[i];
		for (let j = 0; j < face.keypoints.length; j++) {
			let keypoint = face.keypoints[j];
			fill(0, 255, 0);
			noStroke();
			circle(keypoint.x, keypoint.y, 5); // 얼굴 포인트에 원 그리기
		}
	}
}

// faceMesh가 데이터를 출력할 때 호출되는 콜백 함수
function gotFaces(results) {
	// 결과를 faces 변수에 저장
	faces = results;
}
