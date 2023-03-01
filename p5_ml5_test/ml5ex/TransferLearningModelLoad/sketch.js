// MobileNet 모델 기반 재학습, 인식 및 저장

let video;
let featureExtractor;
let classifier;
let p;
let label = '시작';
let confidence = 0;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);		// 실시간 비디오 요소 생성
  video.size(width, height);			// 비디오 요소의 크기 설정
  video.hide();					          // 비디오 요소 숨김

  let options = { 
    // version: 1,
    // alpha: 1.0,
    // topk: 3,
    // learningRate: 0.0001,
    // hiddenUnits: 100,
    // epochs: 20,
    // batchSize: 0.4,
    numLabels: 2                 // 학습 및 분류할 레이블 수
  };	
  featureExtractor = ml5.featureExtractor('MobileNet', options, getModel);
  classifier = featureExtractor.classification(video);

  p = createP('');
  p.style('font-size', '30px');		// 텍스트 폰트 크기(30픽셀) 설정  
}

function draw() {
  image(video, 0, 0);				                  // 캔버스에 비디오 프레임 표시
  p.html(label + ' : ' + confidence + '%');   // 출력 

  // 인식 결과에 따라 이모지 사용 
  textSize(200);
  if(label === '얼굴'){  // if(label === '얼굴' && confidence > 80) 인식률 80 이상인 경우 
    text('😍', width/2, height/2);
  } else if(label === '주먹'){
    text('✊', width/2, height/2);
  }
}

function getModel() {			// 콜백함수
  label = 'MobileNet 모델 로딩 완료!';
  classifier.load('model/model.json', classify);  // 모델 로드하고 classify() 호출 
}

function classify(){
  classifier.classify(getResult);			          // 인식 결과 호출 
}

function getResult(error, results){
  if (error) {				              // 인식 오류 시
    console.log(error);
    return;				                  // 함수 실행 종료
  } else {	
    label = results[0].label;		    // 인식 결과
    //console.log(label);		      // 인식 결과를 콘솔창에 출력
    confidence = int(results[0].confidence * 100);	// 신뢰도 % 표현 
    classify();	                    // getResult() 재호출함으로써 반복 인식
  }
}

