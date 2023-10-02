// 사람 큐브
let bodypix;
let video;
let segmentation;
let img;

let backgroundVideo;

let theta = 0.0;
let pg;

const options = {
    "outputStride": 8, // 8, 16, or 32, default is 16
    "segmentationThreshold": 0.3 // 0 - 1, defaults to 0.5 
}

function setup() {
    createCanvas(320, 240, WEBGL);
    pg = createGraphics(width, height);

    // Create video from webcam
    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();
    // Load bodypix model
    bodypix = ml5.bodyPix(video, modelReady);
}

function draw() {
  background(250);
  translate(0, 0, 0);
  
  // Draw 3D rotating box
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(pg);
  box(125, 125, 125);
  pop()
  
  theta += 0.05;
}

function modelReady() {
    console.log('ready!');
    // Run bodypix model to detect person
    bodypix.segment(gotResults, options);
}

function gotResults(err, result) {
    if (err) {
        console.log(err)
        return;
    }
    segmentation = result;
    
    // Draw video on pg image
    pg.image(video, 0, 0, width, height)
    // Draw background mask on pg image
    pg.image(segmentation.maskBackground, 0, 0, width, height)

    // Continue runing bodypix model
    bodypix.segment(gotResults, options)
}