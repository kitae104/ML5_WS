// 웹 캠 신체 부위별 포인트 찾기
let img1;
let size=0;
let video;
let poseNet;
let poses=[];
let keypointX=[];
let keypointY=[];
let skeletons=[];

function preload(){
  //img1 = loadImage('/images/soccer3.jpg');  
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide()
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotResult);
}

function modelReady(){  
  console.log('model OK');
}

function gotResult(results){
  poses = results[0].pose.keypoints;
  skeletons = results[0].skeleton;
}

function draw(){
  imageMode(CORNER);
  image(video, 0, 0);

  fill('#FFFF00');
  stroke('#FF0000');
  strokeWeight(3);
  for(let i = 0; i < poses.length; i++){
    keypointX[i]=round(poses[i].position.x);
    keypointY[i]=round(poses[i].position.y);
    ellipse(keypointX[i], keypointY[i],10);
  }
  stroke('#FFFF00');
  strokeWeight(3);
  for(let i=0; i< skeletons.length; i++){
    line(round(skeletons[i][0].position.x), round(skeletons[i][0].position.y), round(skeletons[i][1].position.x), round(skeletons[i][1].position.y));
  }
  size = round(dist(keypointX[0],keypointY[0],keypointX[3],keypointY[3]));
  imageMode(CENTER);
    
  fill(255, 255, 0, 200);
  ellipse(keypointX[0], keypointY[0]-20, 80, 100);  
}