// 마우스 좌우 이동에 따라 비디오 프레임의 모자이크화 크기 변화
// 마우스 대신 손가락 사용으로 변경하면 좋을듯 

let video;

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);	// 실시간 비디오 요소 생성
  video.size(width, height);		// 비디오 요소의 크기 설정
  video.hide();				          // 비디오 요소 숨김
}

function draw() {
  video.loadPixels();			                        // 비디오(video)의 pixels[]에 접근하기 전 픽셀값 로드
  let x = constrain(mouseX, 0, width);
  let size = int(map(x, 0, width, 5, 30));		    // 모자이크 크기: 5 ∼ 30
  for (let y = 0; y < video.height; y += size) {	// 중첩 for문 사용
     for (let x = 0; x < video.width; x += size) {
       let index = (x + y * video.width) * 4;		  // x행 y열의 픽셀 위치
       let r = video.pixels[index+0]; 			        // Red값 읽기
       let g = video.pixels[index+1]; 			        // Green값 읽기
       let b = video.pixels[index+2]; 			        // Blue값 읽기
      
       noStroke();
       fill(r, g, b);					// 픽셀값을 사각형 색상으로 표현
       rect(x, y, size, size);				// 사각형 모자이크화
    }
  }
}