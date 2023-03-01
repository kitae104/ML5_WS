// MobileNet 모델 기반 재학습, 인식 및 저장

let video;
let featureExtractor;
let classifier;
let buttonData1;
let buttonData2;
let buttonTrain;
let buttonSaveModel; 
let p;
let label = '시작';
let confidence = 0;
let num1 = 0;
let num2 = 0;

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
  p.style('font-size', '20px');		// 텍스트 폰트 크기(20픽셀) 설정

  buttonData1 = createButton('학습1: 얼굴');
  buttonData1.size(150, 50); 			            // 버튼 크기 설정
  buttonData1.style('font-size', '20px');		  // 버튼 폰트 크기 설정
  buttonData1.mousePressed(addData1);		      // 버튼 누르면 addData1() 자동 호출

  buttonData2 = createButton('학습2: 주먹');
  buttonData2.size(150, 50); 			            // 버튼 크기 설정
  buttonData2.style('font-size', '20px');	    // 버튼 폰트 크기 설정
  buttonData2.mousePressed(addData2);		      // 버튼 누르면 addData2() 자동 호출

  buttonTrain = createButton('학습/식별');
  buttonTrain.size(150, 50); 			            // 버튼 크기 설정
  buttonTrain.style('font-size', '20px');		  // 버튼 폰트 크기 설정
  buttonTrain.mousePressed(train);		        // 버튼 누르면 train() 자동 호출

  buttonSaveModel = createButton('모델저장');
  buttonSaveModel.size(150, 50); 		          // 버튼 크기 설정
  buttonSaveModel.style('font-size', '20px');	// 버튼 폰트 크기 설정
  buttonSaveModel.mousePressed(saveModel);	  // 버튼 누르면 saveModel() 자동 호출
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
  label = '학습 버튼을 눌러 데이터 입력';
}

function addData1(){
  classifier.addImage('얼굴');		// 모델 학습을 위해 새 이미지 요소를 수집
  num1++;
  label = '학습 데이터1: ' + num1;
}

function addData2(){
  classifier.addImage('주먹');		// 모델 학습을 위해 새 이미지 요소를 수집
  num2++;
  label = '학습 데이터2: ' + num2;
}

function train(){
  classifier.train(training);		      // 사전 학습된 모델을 재학습, training() 호출
}

function training(loss){
  if (loss) {
    label = '모델학습: ' + loss;	  // 학습 진행 상황 출력 --> 0에 가까워짐
  } else {
    console.log('학습 완료');
    classifier.classify(getResult);	// getResult() 호출 → 인식 결과 출력
  }
}

function getResult(error, results){
  if (error) {				              // 인식 오류 시
    console.log(error);
    return;				                  // 함수 실행 종료
  } else {	
    //console.log(results);		      // 인식 결과를 콘솔창에 출력
    label = results[0].label;		    // 인식 결과
    confidence = int(results[0].confidence * 100);	// 신뢰도 % 표현 
    classifier.classify(getResult);	// getResult() 재호출함으로써 반복 인식
  }
}

function saveModel(){
  classifier.save();			          // 모델 저장(→컴퓨터의 다운로드 폴더)
}
