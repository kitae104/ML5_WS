// 동물, 사물 분류하기
let img, classifier;

function preload(){
  img = loadImage('images/머그컵.jpg');
  classifier = ml5.imageClassifier('MobileNet', modelReady);
}

function setup() {
  createCanvas(img.width, img.height+30);
  background(0);
  image(img, 0, 0);
}

function modelReady(){
  console.log('MobileNet 모델 불러오기 완료');
  classifier.classify(img, gotResult);
}

function gotResult(err, results){
  if(err){
    console.error(err);
    return;
  }
  
  fill(255, 255, 0);
  textSize(24);
  text(results[0].label, 2, height-5);
}          