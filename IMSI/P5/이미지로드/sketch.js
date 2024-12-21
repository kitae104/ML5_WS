let img; // 업로드된 이미지를 저장할 변수
let input; // 파일 입력 필드

function setup() {
	createCanvas(800, 600); // 캔버스 생성
	background(220);

	// 파일 입력 필드 생성
	input = createFileInput(handleFile);
	input.position(10, 10); // 입력 필드 위치 지정
}

function handleFile(file) {
	// 파일이 이미지인지 확인
	if (file.type === 'image') {
		img = loadImage(file.data, () => {
			console.log('이미지가 성공적으로 로드되었습니다!');
		});
	} else {
		console.log('이미지 파일만 업로드할 수 있습니다.');
	}
}

function draw() {
	background(220);

	if (img) {
		// 화면 크기에 맞게 이미지 비율 조정
		let imgRatio = img.width / img.height; // 이미지 비율
		let canvasRatio = width / height; // 캔버스 비율

		let newWidth, newHeight;

		if (imgRatio > canvasRatio) {
			// 이미지가 가로로 더 길 경우
			newWidth = width;
			newHeight = width / imgRatio;
		} else {
			// 이미지가 세로로 더 길거나 같을 경우
			newHeight = height;
			newWidth = height * imgRatio;
		}

		// 이미지 표시
		image(
			img,
			(width - newWidth) / 2,
			(height - newHeight) / 2,
			newWidth,
			newHeight
		);
	}

	// 안내 텍스트
	fill(0);
	textSize(16);
	text('이미지를 업로드하세요.', 10, 50);
}
