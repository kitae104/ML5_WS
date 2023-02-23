// KNN Classification 

let video;
let features;
let label = "KNN Classification"; 
let knn;

function setup(){
  createCanvas(640, 550);
  video = createCapture(VIDEO);   // VIDEO 옵션을 사용 
  video.size(640, 550)
  video.hide();                   // 우선 숨긴다.
  background(0);                  // 처음 배경은 검은색 
  features = ml5.featureExtractor('MobileNet', modelReady);   // 이미지 추출 
  knn = ml5.KNNClassifier();                                  // KNN
}

function mousePressed(){
  // 해당 이미지에 대한 logits 출력 
  const logits = features.infer(video);
  console.log(logits.dataSync());
}

function modelReady() {
  console.log('Model is ready!!');  
}

function draw(){
  background(0);
  image(video, 0, 0);   // image를 이용하여 비디오 사용 
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}

