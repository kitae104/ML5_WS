// p5.js: 얼굴, 주먹, 손바닥 모델 학습 및 인식
// https://teachablemachine.withgoogle.com/models/AMEfuoK5q/

// 전역 변수 선언
let modelURL = 'https://teachablemachine.withgoogle.com/models/AMEfuoK5q/';
let classifier, video, flippedVideo, d, label = '모델 로딩 중', confidence = 0;

// 전처리
function preload(){
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

// 초기화
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);     // 실시간 비디오 요소 설정
  video.size(width, height);        // 비디오 크기 설정
  video.hide();                     // 비디오 숨김
  classifyVideo();                  // getResults() 함수 호출 -> 인식 결과 출력 
  d = createDiv('');
  d.style('font-size', '20px');     // 폰트 크기 20픽셀 설정 
}

//=======================================
// 필터링 수행하기 
//=======================================
function draw(){
  image(flippedVideo, 0, 0, width, height); // 비디오 이미지를 캔버스에 그림
  d.html(label + ' : ' + confidence + '%'); // 인식 결과 출력
  // INVERT, POSTERIZE, BLUR, ERODE, DILATE, OPAQUE, THRESHOLD, GRAY
  if(label == '얼굴'){                      // 얼굴이 인식되면 THRESHOLD 필터링 수행
    filter(THRESHOLD);
  } else if(label == '주먹'){               // 주먹이 인식되면 GRAY 필터링 수행
    filter(GRAY);                   
  } else if(label == '손바닥'){             // 손바닥이 인식되면 OPAQUE 필터링 수행
    filter(OPAQUE);                     
  }
}

// 인식 결과 출력
function classifyVideo(){
  flippedVideo = ml5.flipImage(video);             // 비디오 이미지 좌우 반전
  classifier.classify(flippedVideo, getResult);   // flippedVideo가 주어지면 gotResults() 함수 호출
  flippedVideo.remove();                           // 메모리 절약을 위해 flippedVideo 제거
}

function getResult(error, results){           // gotResults() 함수 정의
  if (error) {                                // 오류가 있으면 오류 메시지 출력
    console.log(error);
    return;                                   // 오류가 있으면 함수 종료
  } else {
    label = results[0].label;
    confidence = Math.round(results[0].confidence * 100); // 신뢰도를 백분율로 변환
    classifyVideo();                                      // getResults() 함수 호출 -> 인식 결과 출력
  }
}