// 회귀 
let video;
let mobilenet;
let value = 0;
let addButton;
let trainButton;
let slider;
let predictor;

function setup(){
  createCanvas(640, 550);
  video = createCapture(VIDEO);   // VIDEO 옵션을 사용 
  video.hide();                   // 우선 숨긴다.
  background(0);                  // 처음 배경은 검은색 
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  predictor = mobilenet.regression(video, videoReady);

  slider = createSlider(0, 1, 0.5, 0.01);
  // slider.input(function() {
  //   predictor.addImage(slider.value());
  // });

  addButton = createButton('add example image');
  addButton.mousePressed(function() {
    predictor.addImage(slider.value());
  });

  // 학습하기 
  trainButton = createButton('학습하기');
  trainButton.mousePressed(function() {
    predictor.train(whileTraining);
  });
}

function whileTraining(loss){
  if(loss == null){
    console.log("Training Complete!");
    predictor.predict(gotResults);
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

  rectMode(CENTER);
  fill(0, 255, 0);
  rect(value * width, height/2, 50, 50);

  fill(255);
  textSize(32);
  text(value, 10, height - 20);
  console.log(value);
}

function gotResults(error, results){
  if(error){
    console.error(error);
  } else {    
    console.log(results.value);
    value = results.value;    
    predictor.predict(gotResults);
  }
}