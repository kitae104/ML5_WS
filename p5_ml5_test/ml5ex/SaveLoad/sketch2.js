// 신경망 모델 저장 및 로드 
let video;
let mobilenet;
let classifier;
let label = "loading model"; 
let mouseButton;
let cupButton;
let trainButton;
let saveButton;
let loadButton;

function setup(){
  createCanvas(640, 550);
  video = createCapture(VIDEO);   // VIDEO 옵션을 사용 
  video.hide();                   // 우선 숨긴다.
  background(0);                  // 처음 배경은 검은색 
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);  
}

function modelReady() {
  console.log('Model is ready!!');  
  classifier.load('model.json', customModelReady);
}

function customModelReady() {
  console.log('Custom ModelReady is ready!!');  
  label = "model ready!";
  classifier.classify(gotResults);
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