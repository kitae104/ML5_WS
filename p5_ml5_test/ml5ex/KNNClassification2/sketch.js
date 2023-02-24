// KNN Classification 

let video;
let features;
let knn;
let labelP;
let ready = false;
let x, y; 
let label = '';

function setup(){
  createCanvas(640, 550);
  video = createCapture(VIDEO);   // VIDEO 옵션을 사용 
  video.size(640, 550)
  video.style("transform", "scale(-1, 1)");
  //video.hide();                   // 우선 숨긴다.
  background(0);                  // 처음 배경은 검은색 
  features = ml5.featureExtractor('MobileNet', modelReady);   // 이미지 추출 
  
  labelP = createP("학습 데이터 필요");   
  labelP.style('font-size', '32px');                            

  x =  width / 2;
  y = height / 2;
}

function goClassify(){
  const logits = features.infer(video);  
  knn.classify(logits, getResult);
}

function getResult(error, result){
  if(error){
    console.error(error);
  } else {
    label = result.label;
    labelP.html(label);
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
  } else if(key == ' '){
    knn.addExample(logits, '멈춤');  
  } else if(key == 's') {
    //save(knn, "model.json");
    knn.save("model.json");
  }
}

function modelReady() {
  console.log('MobileNet is loaded!!');   
  knn = ml5.KNNClassifier();      // KNN    
  knn.load('model.json', function() {
    console.log('KNN Data Loaded')
    goClassify();
  });
}

function draw(){
  background(0);
  fill(255);
  image(video, 0, 0);   // image를 이용하여 비디오 사용     
  ellipse(x, y, 36);

  if(label == "0"){
    x++;
  } else if(label == "1"){
    x--;
  }

  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}

// const save = (knn, name) => {
//   const dataset = knn.knnClassifier.getClassifierData();
//   if(knn.mapStringToIndex.length > 0){
//     Object.keys(dataset).forEach(key => {
//       if(knn.mapStringToIndex[key]){
//         dataset[key].label = knn.mapStringToIndex[key];
//       }
//     });
//   }
//   const tensors = Object.keys(dataset).map
// }
