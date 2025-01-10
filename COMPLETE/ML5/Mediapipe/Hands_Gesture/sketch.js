let gestures_results;
let cam = null;
let p5canvas = null;


function setup() {
	p5canvas = createCanvas(640, 480);

	if (window.setCameraStreamToMediaPipe) {
		cam = createCapture(VIDEO);
		cam.size(640, 480);
		cam.hide();
		cam.elt.onloadedmetadata = function () {
			window.setCameraStreamToMediaPipe(cam.elt);
		};
		/* p5canvas.style('width', '100%');
		p5canvas.style('height', 'auto'); */

	}

	// 제스처가 감지되면 호출되는 함수입니다. 감지 결과는 results에 저장됩니다.
	gotGestures = function (results) {
		gestures_results = results;
	};
}

function startWebcam() {
	// window 객체에 setCameraStreamToMediaPipe 함수가 정의되어 있으면, 카메라 스트림을 MediaPipe로 설정합니다.
	if (window.setCameraStreamToMediaPipe) {
		cam = createCapture(VIDEO);
		cam.hide();
		cam.elt.onloadedmetadata = function () {
			window.setCameraStreamToMediaPipe(cam.elt);
		};
		p5canvas.style('width', '100%');
		p5canvas.style('height', 'auto');
	}
}

let cur_name = "";
let old_name = "";

function draw() {
	background(127); // 배경 색 설정
	
	if (cam) {
		image(cam, 0, 0, width, height); // 카메라 화면 출력
	}

	// 각 랜드마크 좌표를 표시합니다.
	// 각 랜드마크 좌표의 위치와 번호에 대한 자세한 정보는 아래 URL을 확인하세요:
	// https://developers.google.com/mediapipe/solutions/vision/hand_landmarker

	if (gestures_results) {
		if (gestures_results.landmarks) {
			for (const landmarks of gestures_results.landmarks) {
				for (let landmark of landmarks) {
					noStroke();
					fill(100, 150, 210); // 랜드마크 색상 설정
					circle(landmark.x * width, landmark.y * height, 10); // 랜드마크 좌표에 원 그리기
				}
			}
		}

		// 제스처 결과를 화면에 표시합니다.
		for (let i = 0; i < gestures_results.gestures.length; i++) {
			noStroke();
			fill(255, 0, 0);
			textSize(20);

			let cur_name = gestures_results.gestures[i][0].categoryName; // 제스처 이름
			//let score = gestures_results.gestures[i][0].score; // 제스처 점수
			//let right_or_left = gestures_results.handednesses[i][0].hand; // 왼손 또는 오른손
			let pos = {
				x: gestures_results.landmarks[i][0].x * width,
				y: gestures_results.landmarks[i][0].y * height,
			};

			textSize(48);
			fill(0);
			textAlign(CENTER, CENTER);
			text(cur_name, pos.x, pos.y); // 제스처 이름을 화면에 표시

			if (cur_name != old_name) {
				console.log(cur_name);
				old_name = cur_name;
			}
		}
	}
}
