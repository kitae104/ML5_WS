let handPose;
let video;
let hands = [];

function preload() {
	// handPose 모델 로드
	handPose = ml5.handPose();
}

function setup() {
	createCanvas(640, 480);
	// 웹캠 비디오 생성 및 숨기기
	video = createCapture(VIDEO);
	video.size(640, 480);
	video.hide();
	// 웹캠 비디오에서 손 감지 시작
	handPose.detectStart(video, gotHands);
}

function draw() {
	// 웹캠 비디오 그리기
	image(video, 0, 0, width, height);

	// 추적된 모든 손의 포인트를 그리기
	for (let i = 0; i < hands.length; i++) {
		let hand = hands[i];
		for (let j = 0; j < hand.keypoints.length; j++) {
			let keypoint = hand.keypoints[j];
			fill(0, 255, 0);
			noStroke();
			circle(keypoint.x, keypoint.y, 10); // 손 포인트에 원 그리기
		}
	}
}

// handPose가 데이터를 출력할 때 호출되는 콜백 함수
function gotHands(results) {
	// 결과를 hands 변수에 저장
	hands = results;
}
