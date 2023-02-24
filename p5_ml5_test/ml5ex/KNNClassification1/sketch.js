// KNN Classification 

let video;
let features;
let label = "KNN Classification"; 
let knn;
let labelP;
let ready = false;

function setup(){
  createCanvas(640, 550);
  video = createCapture(VIDEO);   // VIDEO 옵션을 사용 
  video.size(640, 550)
  video.hide();                   // 우선 숨긴다.
  background(0);                  // 처음 배경은 검은색 
  features = ml5.featureExtractor('MobileNet', modelReady);   // 이미지 추출 
  knn = ml5.KNNClassifier();      // KNN   
  labelP = createP("학습 데이터 필요");   
  labelP.style('font-size', '32px');                            

}

function goClassify(){
  const logits = features.infer(video);  
  knn.classify(logits, getResult);
}

function getResult(error, result){
  if(error){
    console.error(error);
  } else {
    labelP.html(result.label);
    goClassify();               // 다시 분류 
  }
}

// 마우스를 누를 때 결과 확인하기 
// function mousePressed(){
//   if(knn.getNumLabels() > 0) {
//     const logits = features.infer(video);
//     // 해당 이미지에 대한 logits 출력 
//     //console.log(logits.dataSync());
//     knn.classify(logits, getResult);
//   }
// }

function keyPressed(){
  const logits = features.infer(video);
  if(key == "l"){
    knn.addExample(logits, '왼쪽');
    console.log("왼쪽");
  } else if(key == 'r') {
    knn.addExample(logits, '오른쪽');
    console.log("오른쪽");
  }

}

function modelReady() {
  console.log('Model is ready!!');    
}

function draw(){
  background(255);
  image(video, 0, 0);   // image를 이용하여 비디오 사용 
  
  if(!ready && knn.getNumLabels() > 0) {
    goClassify();
    ready == true;
  }
}


