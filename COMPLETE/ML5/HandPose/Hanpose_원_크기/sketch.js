let handPose;
let video;
let hands = [];

// 엄지와 검지 사이의 "집기" 동작을 추적하는 변수
let pinch = 0;

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

	// 최소 한 개의 손이 감지되었을 경우
	if (hands.length > 0) {
		// 검지 끝과 엄지 끝 위치 찾기
		let finger = hands[0].index_finger_tip;
		let thumb = hands[0].thumb_tip;

		// 손가락 위치에 원 그리기
		let centerX = (finger.x + thumb.x) / 2; // 중심 X 좌표 계산
		let centerY = (finger.y + thumb.y) / 2; // 중심 Y 좌표 계산
		// 손가락과 엄지 사이의 "집기" 거리 계산
		let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

		// 이 원의 크기는 "집기" 동작에 의해 제어됨
		fill(0, 255, 0, 200);
		stroke(0);
		strokeWeight(2);
		circle(centerX, centerY, pinch); // 중심에 원 그리기
	}
}

// handPose가 데이터를 출력할 때 호출되는 콜백 함수
function gotHands(results) {
	// 결과를 hands 변수에 저장
	hands = results;
}
