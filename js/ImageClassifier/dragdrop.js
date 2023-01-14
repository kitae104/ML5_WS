// 드래그&드롭으로 분류하기
let classifier;
let dropBox;
let img = 0;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
}

function setup() {
  dropBox = createCanvas(400, 400);
  background(100);
  dropBox.drop(afterDrop);
}

function afterDrop(file){
  img = loadImage(file.data,imageReady);
  classifier.classify(img, gotResult);
}

function imageReady(){
  resizeCanvas(img.width, img.height+60);
  background(100);
  image(img,0,0);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
  fill(255);
  textSize(20);
  text('분석 : '+results[0].label,0,height-30);
  text('정확도 : '+nf(results[0].confidence*100,0,1)+'%',0,height-10);
}