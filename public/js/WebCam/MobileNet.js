// 웹캠 영상으로 사물 분류하기
let classifier;
let video;

function setup() {
  noCanvas();
  video = createCapture(video);
  video.size(400, 400);
  classifier = ml5.imageClassifier('MobileNet', video, modelReady);
  labelP = createP('비디오 영상 분석을 위한 머신러닝모델 로딩 중........!');
}

function modelReady(){
  console.log('머신러닝 모델(MobileNet)이 준비되었습니다.!');
  classifyVideo();
}

function classifyVideo(){
  classifier.classify(gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  if(results[0].confidence > 0.2){
    labelP.html('비디오영상 분석 결과 : '+results[0].label + '<br>' + '정확도 : '+nf(results[0].confidence, 0, 2));
  }
  classifyVideo();
}