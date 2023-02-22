let img;
let detector;

function preload(){
  img = loadImage("cat.jpg");                 // 이미지 로딩 
  detector = ml5.objectDetector('cocossd');   // 모델 설정 
}

function setup(){
  createCanvas(640, 480);
  console.log(detector);
  image(img, 0, 0);
  detector.detect(img, getDetections)         // 객체 추출 
}

function getDetections(error, results){
  if(error){
    console.log(error);
  } else {
    console.log(results);
    for (let i = 0; i < results.length; i++) {
      let object = results[i];              // 추출된 객체 
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
}

