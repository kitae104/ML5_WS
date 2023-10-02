// 눈 사이의 거리에 따라 글자 두께를 조절하는 예제
let video;
let poseNet;
let poses = [];

let eyeDistance = 500;
let myText;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  //change the options to make model run faster
  var options = {
  architecture: 'MobileNetV1',
  imageScaleFactor: 0.3,
  outputStride: 16,
  flipHorizontal: false,
  minConfidence: 0.5,
  scoreThreshold: 0.5,
  nmsRadius: 20,
  detectionType: 'single',
  inputResolution: 257,
  multiplier: 0.5,
  quantBytes: 2,
};

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, options, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
  
  myText = document.getElementById("myText");
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  image(video, 0, 0, width, height);
  strokeWeight(2);

  if (poses.length > 0) {
    fill(255, 215, 0);
    let rightEye = poses[0].pose['rightEye'];
    ellipse(rightEye.x, rightEye.y, 20, 20);

    let leftEye = poses[0].pose['leftEye'];
    ellipse(leftEye.x, leftEye.y, 20, 20);
    
    eyeDistance = dist(rightEye.x, rightEye.y, leftEye.x, leftEye.y);
    eyeDistance = map(eyeDistance, 50, 450, 0, 1000);
  }
  
  //Adjust weight of the variable font based on eyeDistance
  let settings = "font-variation-settings: " + '"' + "wght" + '" ' + constrain(eyeDistance, 0, 1000);
  myText.setAttribute("style", settings);
}