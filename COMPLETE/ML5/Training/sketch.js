
let video;
let poseNet;
let pose;
let countdownActive = false;
let countdownTime = 5;
let remainingTime = countdownTime;
let countdownTimer;
let actionState = 'waiting'; // 初始状态

let countdownActiveB = false;
let remainingTimeB = countdownTime;
let countdownTimerB;
let showTextC = false;
let textCTimer;

let countdownActiveC = false;
let remainingTimeC = countdownTime;
let countdownTimerC;
let showTextD = false;
let textDTimer;

let countdownActiveD = false;
let remainingTimeD = countdownTime;
let countdownTimerD;
let showTextE = false;
let textETimer;

let brain;
let poseLabel = "";
let lastPoseLabel = "";

let startPhase = true;
let startButton;

let showTextB = false;
let textBTimer;
let countdownTriggered = false; // 新增的标志

// adding images -------------------------
let img1;
let img2;
let img3;
let img4;
function preload() {
  img1 = loadImage('images/training/4-1.png');
  img2 = loadImage('images/training/4-2.png');
  img3 = loadImage('images/training/4-3.png');
  img4 = loadImage('images/training/4-4.png');
}
let showTextA = true; 
let textATimer;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

  let options = {
    inputs: 34,
    outputs: 4,
    task: 'classification',
    debug: true
  }
  brain = ml5.neuralNetwork(options);

  const modelInfo = {
    model: 'model/training/model.json',
    metadata: 'model/training/model_meta.json',
    weights: 'model/training/model.weights.bin',
  };
  brain.load(modelInfo, brainLoaded);

  // START BUTTON
  startButton = createButton('Start');
  startButton.position(13, 13);
  startButton.mousePressed(startRecognition);
  startButton.style('background-color', '#D8FF57'); 
  startButton.style('color', 'black'); // Set text color
  startButton.style('padding', '7px 18px'); // Set padding
  startButton.style('border', 'none'); // Remove border
  startButton.style('border-radius', '4px'); // Set border radius
  startButton.style('cursor', 'pointer'); // Change cursor on hover
  startButton.style('font-size', '18px');
  startButton.style('font-family', 'Dosis');
  startButton.style('font-weight', 'bold'); 
}

function startRecognition() {
  if (startPhase) {
    startPhase = false;
    startButton.html('Restart');
    showTextB = false;
    showTextC = false;
    if (!countdownTriggered) { 
      startCountdown();
      countdownTriggered = true; 
    }
  } else {
    startPhase = true;
    startButton.html('Start');
    stopCountdown();
    countdownTriggered = false; 
  }
}

function brainLoaded() {
  classifyPose();
}

function classifyPose() {
  if (pose) {
    let inputs = [];
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      inputs.push(x);
      inputs.push(y);
    }
    brain.classify(inputs, gotResult);
  } else {
    setTimeout(classifyPose, 100);
  }
}

function gotResult(error, results) {
  if (results[0].confidence > 0.95) {
    poseLabel = results[0].label.toUpperCase();

    if (poseLabel === 'A' && !countdownActive && !startPhase) {
      startCountdown();
    } else if (poseLabel !== 'A') {
      stopCountdown();
    }
    if (poseLabel === 'B' && !countdownActiveB && !startPhase) {
      startCountdownB();
    } else if (poseLabel !== 'B') {
      stopCountdownB();
    }
    if (poseLabel === 'C' && !countdownActiveC && !startPhase) {
      startCountdownC();
    } else if (poseLabel !== 'C') {
      stopCountdownC();
    }
    if (poseLabel === 'D' && !countdownActiveD && !startPhase) {
      startCountdownD();
    } else if (poseLabel !== 'D') {
      stopCountdownD();
    }
  }
  classifyPose();
}

function startCountdown() {
  countdownActive = true;
  remainingTime = countdownTime;

  countdownTimer = setInterval(function () {
    remainingTime--;
    if (remainingTime <= 0) {
      clearInterval(countdownTimer);
      countdownActive = false;
      console.log('Finished A');
      showTextA = false;  // hide text a
      showTextB = true;   // show text b
      startCountdownB();  // start countdown for B
    }
  }, 1000);
}
function startCountdownB() {
  countdownActiveB = true;
  remainingTimeB = countdownTime;

  countdownTimerB = setInterval(function () {
    remainingTimeB--;
    if (remainingTimeB <= 0) {
      clearInterval(countdownTimerB);
      countdownActiveB = false;
      console.log('Finished B');
      showTextC = true;
      textCTimer = setTimeout(function () {
        showTextC = false;
      },5000); 
    }
  }, 1000);
}

function startCountdownC() {
  countdownActiveC = true;
  remainingTimeC = countdownTime;

  countdownTimerC = setInterval(function () {
    remainingTimeC--;
    if (remainingTimeC <= 0) {
      clearInterval(countdownTimerC);
      countdownActiveC = false;
      console.log('Finished C');
      showTextD = true;
      textDTimer = setTimeout(function () {
        showTextD = false;
      },5000); 
    }
  }, 1000);
}

function startCountdownD() {
  countdownActiveD = true;
  remainingTimeD = countdownTime;

  countdownTimerD = setInterval(function () {
    remainingTimeD--;
    if (remainingTimeD <= 0) {
      clearInterval(countdownTimerD);
      countdownActiveD = false;
      console.log('Finished D');
      showTextE = true;
      textETimer = setTimeout(function () {
        showTextE = false;
      }, 5000); 
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownTimer);
  countdownActive = false;
  clearInterval(textBTimer);
  showTextB = false;
}
function stopCountdownB() {
  clearInterval(countdownTimerB);
  countdownActiveB = false;
  clearTimeout(textCTimer);
  showTextC = false;
}
function stopCountdownC() {
  clearInterval(countdownTimerC);
  countdownActiveC = false;
  clearTimeout(textDTimer);
  showTextD = false;
}
function stopCountdownD() {
  clearInterval(countdownTimerD);
  countdownActiveD = false;
  clearTimeout(textETimer);
  showTextE = false;
}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    // skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  // ADD STARTPHASE 
    if (startPhase) {
    background(0);
    noFill();
    stroke(216,255,87); 
    strokeWeight(1);
    rect(0,0, 480, 400)
    fill(0);
    rect(80, 80, 1000, 1500); 
    fill(216,255,87);
    textSize(18);
    text('< ---------- Press Start to Begin', 120, 38 );
    textSize(45);
    // text("FIT KIT", CENTER, CENTER); 
    text('FI KIT', 270, 240 );
    textSize(20);
    text('By Vicky Wang & Zoey Zhang', 212, 280); 
    return; // Don't execute the rest of the draw function
  }

  push();
  translate(video.width, 0);
  scale(-1, 1);
  image(video, 0, 0, video.width, video.height);

  if (pose) {
    // Draw pose keypoints if needed
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill(0);
      stroke(255);
      ellipse(x, y, 16, 16);
    }
  }

  pop();

  fill(255, 0, 255);
  noStroke();
  textSize(100);
  textAlign(CENTER, CENTER);
  text(poseLabel, 550, 400);
  
  
  if (showTextA) {
    textSize(22);
    fill(216,255,87);
    text('Step 1', 45, 450);
    image(img1, 440, 0, 200, 160);
  }
  
  if (showTextB) {
    textSize(22);
    fill(216,255,87);
    text('Step 2', 45, 450);
    image(img2, 440, 0, 200, 160);
  }
   if (showTextC) {
    textSize(22);
    fill(216,255,87);
    text('Step 3', 45, 450);
    image(img3, 440, 0, 200, 160);
  }
  if (showTextD) {
    textSize(22);
    fill(216,255,87);
    text('Step 4', 45, 450);
    image(img4, 440, 0, 200, 160);
  }
 if (showTextE) {
    textSize(22);
    fill(216,255,87);
    text('Finished!', 40, 450);
  }

  if (!startPhase && countdownActive) {
    textSize(22);
    fill(216,255,87);
    text(`Countdown: ${remainingTime}s`, 90, 420);
  }
  if (!startPhase && countdownActiveB) {
    textSize(22);
    fill(216,255,87);
    text(`Countdown B: ${remainingTimeB}s`, 90, 420);
  }
  if (!startPhase && countdownActiveC) {
    textSize(22);
    fill(216,255,87);
    text(`Countdown C: ${remainingTimeC}s`, 90, 420);
  }
  if (!startPhase && countdownActiveD) {
   textSize(22);
   fill(216,255,87);
    text(`Countdown D: ${remainingTimeD}s`, 90, 420);
  }
}
