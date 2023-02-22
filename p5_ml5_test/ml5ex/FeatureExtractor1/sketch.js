// 분류 - 직접 학습
// 마스크, 노-마스크
// 즐거움, 슬픔
// 가위, 바위, 보
let video;
let mobilenet;
let classifier;
let label = "test"; 
let mouseButton;
let cupButton;
let trainButton;

function setup(){
  createCanvas(640, 550);
  video = createCapture(VIDEO);   // VIDEO 옵션을 사용 
  video.hide();                   // 우선 숨긴다.
  background(0);                  // 처음 배경은 검은색 
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);

  mouseButton = createButton('마스크');
  mouseButton.mousePressed(function() {
    classifier.addImage('마스크');
  });

  cupButton = createButton('노 마스크');
  cupButton.mousePressed(function() {
    classifier.addImage('노_마스크');
  });

  // 학습하기 
  trainButton = createButton('학습하기');
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });
}

function whileTraining(loss){
  if(loss == null){
    console.log("Training Complete!");
    classifier.classify(gotResults);
  } else{
    console.log(loss);
  }
}

function modelReady() {
  console.log('Model is ready!!');  
}

function videoReady() {
  console.log('Video is ready!!');  
}

function draw(){
  background(0);
  image(video, 0, 0);   // image를 이용하여 비디오 사용 
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}

function gotResults(error, results){
  if(error){
    console.error(error);
  } else {    
    label = results[0].label;
    conf = results[0].confidence;    
    classifier.classify(gotResults);
  }
}