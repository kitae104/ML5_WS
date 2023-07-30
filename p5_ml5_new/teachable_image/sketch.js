// p5.js: 얼굴, 주먹, 손바닥 모델 학습 및 인식
// https://teachablemachine.withgoogle.com/models/AMEfuoK5q/

// 전역 변수 선언
let modelURL = 'https://teachablemachine.withgoogle.com/models/AMEfuoK5q/';
let classifier, video, flippedVideo, d, label = '모델 로딩 중', confidence = 0;
let img, degree = 0;

// 전처리
function preload(){
  img = loadImage('나루토.png'); // 이미지 불러오기
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

// 초기화
function setup() {
  createCanvas(640, 480, WEBGL);    // 캔버스 생성
  video = createCapture(VIDEO);     // 실시간 비디오 요소 설정
  video.size(320, 240);             // 비디오 크기 설정  
  classifyVideo();                  // getResults() 함수 호출 -> 인식 결과 출력 
  d = createDiv('');
  d.style('font-size', '20px');     // 폰트 크기 20픽셀 설정 

  angleMode(DEGREES);               // 각도 단위를 DEGREES로 설정
  imageMode(CENTER);                // 이미지 모드를 CENTER로 설정
}

//=======================================
// 이모지 적용하기 
//=======================================
function draw(){
  background(0);                            // 배경을 검은색으로 설정
  rotateX(degree);                          // X축을 기준으로 회전  
  image(img, 0, 0);                         // 이미지를 캔버스 중앙에 배치

  d.html(label);

  if(label === '얼굴') {                    // 인식 결과가 얼굴이면
    degree += 0;                            // 회전하지 않음
  } else if(label === '주먹') {             // 인식 결과가 주먹이면
    degree += 1;                            // 1도씩 정방향 회전
  } else if(label === '손바닥') {           // 인식 결과가 손바닥이면
    degree -= 1;                            // -1도씩 역회전
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
    classifyVideo();                                      // getResults() 함수 호출 -> 인식 결과 출력
  }
}