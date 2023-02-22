let video;
let detector;
let detections = [];



function setup(){
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  detector = ml5.objectDetector('cocossd', modelReady);   // 모델 설정 
}

function draw(){
  
  image(video, 0, 0);

  for (let i = 0; i < detections.length; i++) {
    let object = detections[i];              // 추출된 객체 
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);

    noStroke();
    fill(255);
    textSize(24);
    text(object.label, object.x + 10, object.y + 24);
  }
  
}

function modelReady(){
  console.log('model loaded')  
  detect();                     // 모델 로링 후에 검출 싲가 
}

function detect(){
  detector.detect(video, getDetections);  // 검출시작 
}

function getDetections(error, results){
  if(error){
    console.log(error);
  } else {
    console.log(results);
    detections = results;
    detector.detect(video, getDetections);         // 객체 추출 
  }
}

