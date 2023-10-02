// 코를 추적하고 손전등 효과 적용하기 
let video;
let poseNet;
let poses = [];

let nose; 

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  pixelDensity(1);
  nose = createVector(0,0);
  
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
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {  
  image(video, 0, 0, width, height);

  if (poses.length > 0) {
     nose = poses[0].pose['nose'];
  } 
  
  //load the original pixels
  loadPixels();
    for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      // Calculate the 1D location from a 2D grid
      let loc = (x + y * width) * 4;
      // Get the R,G,B values from image
      let r, g, b;
      r = pixels[loc];
      // Calculate an amount to change brightness based on proximity to the nose
      let maxdist = 50;
      let d = dist(x, y, nose.x, nose.y);
      let adjustbrightness = (255 * (maxdist - d)) / maxdist;
      r += adjustbrightness;
      // Constrain RGB to make sure they are within 0-255 color range
      r = constrain(r, 0, 255);
      // Make a new color and set pixel in the window
      //color c = color(r, g, b);
      let pixloc = (y * width + x) * 4;
      pixels[pixloc] = r;
      pixels[pixloc + 1] = r;
      pixels[pixloc + 2] = r;
      pixels[pixloc + 3] = 255;
    }
  }
  updatePixels();
}