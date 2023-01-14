// 낙서 이미지 판별하기
let classifier;
let canvas;

function preload(){
  classifier = ml5.imageClassifier('DoodleNet');
}

function setup() {
  canvas = createCanvas(400, 400);
  background(255);
  canvas.mouseReleased(doit);
  let btn = createButton('낙서 지우기');
  btn.position(270, 14);
  btn.mousePressed(clsDraw);
  createDiv('낙서 분류: ....');
  createDiv('정확도 : .....');
}

function clsDraw(){
  background(255);
}

function draw() {
  strokeWeight(16);
  stroke(0);
  if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}

function doit(){
  classifier.classify(canvas, gotResult);
}

function gotResult(error, results){
  if(error){
    console.error(error);
  }
  console.log(results);
  createDiv('분석 결과 : '+results[0].label);
  createDiv('정확도 : '+nf(results[0].confidence*100,0,1)+'%');
}