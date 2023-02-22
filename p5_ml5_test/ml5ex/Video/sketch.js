let video;
let mobilenet;
let label = ""; 
function setup(){
  createCanvas(640, 550);
  video = createCapture(VIDEO);   // VIDEO 옵션을 사용 
  video.hide();                   // 우선 숨긴다.
  background(0);                  // 처음 배경은 검은색 
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function modelReady() {
  console.log('Model is ready!!');
  mobilenet.predict(gotResults);
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
    console.log(results)
    label = results[0].label;
    conf = results[0].confidence;
    
    mobilenet.predict(gotResults);
  }
}