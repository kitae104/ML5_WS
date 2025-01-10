// ---------------------------------------
// copy to clipboard inspiration from here: https://openprocessing.org/sketch/1034949/
// global variables
let modelHand;
let thumbTip;
let indexTip;
let middleTip;
let ringTip;
let pinkyTip;
let preview = true;
let locations = [
  [36, 323],
  [126, 130],
  [205, 94],
  [275, 145],
  [336, 228],
]; // stores keypoint coordinates
// let pointColors = ["red", "orange", "pink", "green", "blue"];
let ml5Color = "#a256ff";
let pointColors = [ml5Color, ml5Color, ml5Color, ml5Color, ml5Color];
let keyPointObjs = []; // stores all the keyPointObjs made from KeyPointObj class
let rightPanelX = 150;
let rightPanelY = 20;
let selectedString = "";
let buttonBarX = 175;
let buttonBarY = 600;
//let myVideo;
let myResults;
let handPose;

let myVideo = {
    video: {
      mandatory: {
        minWidth: 0,
        minHeight: 0
      },
      // optional: [{ maxFrameRate: 10 }]
    },
    audio: false
  };

// sketch and p5 functions
let resultPoints = {
  // TODO Change all places using this to instead use the selector attrib of the keyPointObj class
  thumbTip: "엄지",
  indexTip: "검지",
  middleTip: "중지",
  ringTip: "약지",
  pinkyTip: "소지",
  // add in rest and get correct selectors for handpose sketches
};

function preload() {
  modelHand400 = loadImage("images/keypoints/modelHand400.png");
  modelHand2 = loadImage("images/keypoints/modelHand2.png");
  //openEye4 = loadImage("images/keypoints/openEye4.png")
  //closedEye2 = loadImage("images/keypoints/closedEye2.png")
  

  //frameRate(10);
}

function setup() {
  noStroke();
  canvas = createCanvas(1100, 700);
  setLocations(21, 0); // these vals should be roughly equal to the ones for translateSkeleton
  initiateKeypointObjs();
  //fakeButton()
  //makeLinks()
  //pop = loadSound('pop.wav');

  // Create the myVideo capture.
  myVideo = createCapture(myVideo);
  myVideo.size(600, 500);
  myVideo.hide();
  handPose = ml5.handpose();
  handPose.detectStart(myVideo, gotResults);
}

function gotResults(results) {
  //console.log(results); // uncomment if you want to see your results!
  myResults = results;
}

// setting up functions for handpose

function draw() {
  background("#f0f0f0");
  //background("white")
  translateSkeleton(20, 0);
  drawEmptyPoints();
  

  // call right panel functions
  if (preview === false) {
    drawResultContainer();
    setAndDisplaySelected();
  } else {
    image(myVideo, 270 + rightPanelX, 50 + rightPanelY);
    if (myResults) {
      drawKeyPoints();
      //runPreview()
    }
  }
  //drawPreviewButton()

  // ---

  noStroke();
  textFont("Inconsolata");
  //drawCurrentMouseCoords();
  noStroke();
  fakeButtonSimple();
 //drawButtonBar(buttonBarX, buttonBarY);

  for (let i = 0; i < keyPointObjs.length; i++) {
    keyPointObjs[i].drawCircle();
  }
  mouseOver();
}

function mousePressed() {
  for (let i = 0; i < keyPointObjs.length; i++) {
    keyPointObjs[i].clicked(mouseX, mouseY);
  }
  /* if (dist(mouseX, mouseY, 830 + rightPanelX, 575 + rightPanelY) <= 20) {
    // copy selectedString custom to user's current selection
    copyToClipboard(selectedString);
    console.log(selectedString);
  } */
  /* if (mouseY >= 600 && mouseY <= 620 && mouseX >= 178 && mouseX <= 250) {
    //range accounting for text length
    window.open("https://editor.p5js.org/conniehu25/sketches/DqXRNOKrr");
  }
  if (dist(mouseX, mouseY, 50, 50) <= 20) {
    preview = !preview;
    
  } */
}

function mouseOver() {
  for (let i = 0; i < keyPointObjs.length; i++) {
    keyPointObjs[i].hovering(mouseX, mouseY);
    
  }
  /* if (dist(mouseX, mouseY, 830 + rightPanelX, 575 + rightPanelY) <= 10) {
    textSize(12);
    cursor(HAND);
    //fill("white"); // text color on hover
    fill("black");
    text("copy to clipboard!", 700 + rightPanelX, 580 + rightPanelY);
    noStroke();
  } else {
    cursor(ARROW);
  } */
  if (mouseY >= 600 && mouseY <= 620 && mouseX >= 178 && mouseX <= 250) {
    //range accounting for text length
    cursor(HAND);
  }
  if (dist(mouseX, mouseY, 50, 50) <= 20) {
    cursor(HAND)
  }
}

//utility functions below

function setAndDisplaySelected() {
  selectedString = "function drawKeyPoints() {\n";
  selectedString += `  //myResults returns an object for each hand\n`;
  selectedString += `  leftHand = myResults[0];\n`;
  selectedString += `  rightHand = myResults[1];\n`;
  selectedString += `  if (!leftHand && !rightHand) {\n    return\n  }\n`;
  selectedString += `  KeyPointsHelper(leftHand);\n`;
  selectedString += `  KeyPointsHelper(rightHand);\n}\n\n`;

  // now for the helper function
  selectedString += `function KeyPointsHelper(hand) {\n`;
  selectedString += `if (!hand) return;\n`;
  selectedString += `  //set vars for each selected key point\n`;
  for (let i = 0; i < keyPointObjs.length; i++) {
    if (keyPointObjs[i].selected) {
      selectedString += `  ${keyPointObjs[i].id} = hand${keyPointObjs[i].multiPurposeId} \n`;
      // selectedString += "\n"
      //console.log(keyPointObjs[i].selector)
    }
  }

  //selectedString += `  .... \n` // add lines here for the rest of the standard drawKeypoints function
  selectedString += `\n  fill(0, 255, 0);\n  noStroke();\n\n`;

  // write in the circle finction
  for (let i = 0; i < keyPointObjs.length; i++) {
    if (keyPointObjs[i].selected) {
      selectedString += `  circle(${keyPointObjs[i].id}.x, ${keyPointObjs[i].id}.y, 10);\n`;
      // selectedString += "\n"
      //console.log(keyPointObjs[i].selector)
    }
  }
  selectedString += `}`;
  //circle(keypoint.x, keypoint.y, 10);

  // draw function string content to right panel
  textSize(15);
  fill("black");
  text(selectedString, rightPanelX + 475, rightPanelY + 80);
}

function hoverCoords(keyPointSelector) {
  // change this name to be for making the interactive hover results
  //code for finding coords
  fill(255, 60, 100);
  //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  fill("#d4c8bb");
  //rect(mouseX + 20, mouseY -60, 250, 60, 20)
  //ellipse(mouseX + 65, mouseY - 30, 120, 50);
  textSize(12);
  //fill("white"); // text color on hover
  fill("black");
  text(keyPointSelector, mouseX + 25, mouseY - 10);
  noStroke();
}

function drawEmptyPoints() {
  // instead of drawing a bunch of white ellipses in the else statement of the drawCircle function inside the keyPointsObj class, use this to return the diagram to have empty circles when unhovering
  for (let curr_point = 0; curr_point < locations.length; curr_point++) {
    fill(pointColors[curr_point]);
    //console.log(point);
    // console.log(locations[curr_point])
    // console.log(locations[curr_point][0])
    ellipse(locations[curr_point][0], locations[curr_point][1], 27, 27);
    //fill("white")
    drawDeselect();
  }
}

function drawDeselect() {
  for (let curr_point = 0; curr_point < locations.length; curr_point++) {
    fill("#f0f0f0");
    noStroke();
    ellipse(locations[curr_point][0], locations[curr_point][1], 20, 20);
  }
}

function initiateKeypointObjs() {
  keyPointObjs.push(
    new keyPointObj(
      locations[0][0],
      locations[0][1],
      "thumbTip",
      false,
      false,
      pointColors[0],
      10,
      "myResults[0].thumb_tip",
      ".thumb_tip"
    )
  );
  keyPointObjs.push(
    new keyPointObj(
      locations[1][0],
      locations[1][1],
      "indexTip",
      false,
      false,
      pointColors[1],
      10,
      "myResults[0].index_finger_tip",
      ".index_finger_tip"
    )
  );
  keyPointObjs.push(
    new keyPointObj(
      locations[2][0],
      locations[2][1],
      "middleTip",
      false,
      false,
      pointColors[2],
      10,
      "myResults[0].middle_finger_tip",
      ".middle_finger_tip"
    )
  );
  keyPointObjs.push(
    new keyPointObj(
      locations[3][0],
      locations[3][1],
      "ringTip",
      false,
      false,
      pointColors[3],
      10,
      "myResults[0].ring_finger_tip",
      ".ring_finger_tip"
    )
  );
  keyPointObjs.push(
    new keyPointObj(
      locations[4][0],
      locations[4][1],
      "pinkyTip",
      false,
      false,
      pointColors[4],
      10,
      "myResults[0].pinky_finger_tip",
      ".pinky_finger_tip"
    )
  );
}

function drawResultContainer() {
  fill("white");
  rect(
    450 + rightPanelX,
    40 + rightPanelY,
    modelHand400.width + 15,
    modelHand400.height - 55,
    20
  );
}

function translateSkeleton(x, y) {
  //rect(-5+x, 40+y, modelHand400.width + 15+x, modelHand400.height + 15 + y, 20);
  // image(modelHand400, 0+x, 50+y, modelHand400.width, modelHand400.height);
  image(modelHand2, 0 + x, 50 + y, modelHand2.width, modelHand2.height);
}

function setLocations(x, y) {
  // for(let i=0; i<locations.length;i++){
  //   locations[i] = [locations[i[0]+x], locations[i[0]+y]]
  locations = [
    [38 + x, 310 + y],
    [126 + x, 130 + y],
    [205 + x, 94 + y],
    [275 + x, 145 + y],
    [336 + x, 228 + y],
  ];
}

class keyPointObj {
  constructor(x, y, id, selected, hovered, color, r, selector, multiPurposeId) {
    this.id = id;
    this.selected = selected;
    this.hovered = hovered;
    this.color = color;
    this.x = x;
    this.y = y;
    this.r = r;
    this.selector = selector;
    this.multiPurposeId = multiPurposeId;
  }

  drawCircle() {
    if (this.selected || this.hovered) {
      fill(this.color);
      ellipse(this.x, this.y, this.r * 2 + 1, this.r * 2 + 1);
    } else {
      // fill("white");
      // ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
  }
  // class function to control what happens when obj instance is clicked
  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.selected = !this.selected;
      this.drawCircle();
      //pop.play();
      console.log(resultPoints.thumbTip);
      setAndDisplaySelected();
    }
  }
  hovering(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.hovered = true;
      
      //console.log("hovering");
      

      hoverCoords(resultPoints[this.id]);
    } else {
      this.hovered = false;
    }
    this.drawCircle();
  }
}

// testing testing belowww

// function copyToClipboard(text) {
//   var dummy = document.createElement("textarea");
//   document.body.appendChild(dummy);
//   dummy.value = text;
//   dummy.select();
//   document.execCommand("copy");
//   document.body.removeChild(dummy);
// }

function fakeButton() {
  playButton = createButton("▷");
  //playButton.position(310, 400);
  playButton.position(600, 600);
  //playButton.mouseClicked(togglePlay);
  //playButton.mousePressed(copyToClipboard("works"))
  // playButton.mousePressed(logTest)
  playButton.style("background-color", "white");
  // playButton.size(200, 100);
  playButton.size(100, 100);
  playButton.style("font-family", "Fredoka One");
  playButton.style("color", "black");
  playButton.style("font-size", "38px");
  playButton.style("border-color", "grey");
  playButton.style("border-width", "2px"); // get rid of border/stroke
  playButton.style("border-radius", "50px");
}

function fakeButtonSimple() {
  fill("#a256ff");
  ellipse(830 + rightPanelX, 575 + rightPanelY, 20, 20);
}

function drawButtonBar(buttonBarX, buttonBarY) {
  push();
  translate(buttonBarX, buttonBarY);
  fill("#a256ff");
  rect(0, 0, 80, 20, 4);
  // rect(100, 0, 80, 20, 4);
  // rect(200, 0, 80, 20, 4);

  fill("white");
  text("template", 10, 14);
  pop();
}

function logTest() {
  console.log("testing");
}

// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     copyToClipboard("Hello World")
//   }
// }

function drawCurrentMouseCoords() {
  fill(255, 60, 100);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  stroke(0);
  noFill();
}

function runPreview() {
  fill("#f0f0f0");
  rect(
    450 + rightPanelX,
    40 + rightPanelY,
    modelHand400.width + 15,
    modelHand400.height - 55,
    20
  );
}

function drawKeyPoints() {
  //myResults returns an object for each hand
  leftHand = myResults[0];
  rightHand = myResults[1];
  if (!leftHand && !rightHand) {
    return;
  }
  KeyPointsHelper(leftHand, 255, 60);
  KeyPointsHelper(rightHand, 240, 60);
}

// function KeyPointsHelper(hand) {
//   if (!hand) return;
//   //set vars for each selected key point
//   indexTip = hand.index_finger_tip;
//   pinkyTip = hand.pinky_finger_tip;

//   fill(0, 255, 0);
//   noStroke();

//   push();
//   translate(335 + rightPanelX, 60 + rightPanelY);
//   circle(indexTip.x, indexTip.y, 10);
//   circle(pinkyTip.x, pinkyTip.y, 10);
//   pop();
// }

function KeyPointsHelper(hand, offsetX, offsetY) {
  if (!hand) return;
  fill("#a256ff");
  noStroke();

  push();
  // translate(355 + rightPanelX, 60 + rightPanelY);
  //translate(255 + rightPanelX, 60 + rightPanelY); // right
  //translate(240 + rightPanelX, 60 + rightPanelY);
  translate(offsetX + rightPanelX, offsetY + rightPanelY)
  // translate(100 + rightPanelX, 60 + rightPanelY);
  //set vars for each selected key point
  thumbTip = hand.thumb_tip
  indexTip = hand.index_finger_tip;
  middleTip = hand.middle_finger_tip
  ringTip = hand.ring_finger_tip
  pinkyTip = hand.pinky_finger_tip;
  
  if (keyPointObjs[0].selected){ // thumbTip
    circle(thumbTip.x, thumbTip.y, 20);
  }
  if (keyPointObjs[1].selected){ // thumbTip
    circle(indexTip.x, indexTip.y, 20);
  }
  if (keyPointObjs[2].selected){ // thumbTip
    circle(middleTip.x, middleTip.y, 20);
  }
  if (keyPointObjs[3].selected){ // thumbTip
    circle(ringTip.x, ringTip.y, 20);
  }
  if (keyPointObjs[4].selected){ // thumbTip
    circle(pinkyTip.x, pinkyTip.y, 20);
  }
  
  // for (let i = 0; i < keyPointObjs.length; i++) {
  //   if (keyPointObjs[i].selected) {
  //     circle(hand.keyPointObjs[i].id.x, hand.keyPointObjs[i].id.y, 10);
  //   }
  // }
  pop();
}

/* function drawPreviewButton(){
  fill("#a256ff")
  ellipse(50, 50, 35, 35)
  if (preview === false){
    openEye4.resize(30, 20);
    //tint("white");
    image(openEye4, 35, 40);
  }else{
    closedEye2.resize(34, 34);
    //tint("white");
    image(closedEye2, 33, 35);
    
  }
  
} */

// copyToClipboard("Hello World") // Then put this somewhere and it will copy it!

// function makeLinks(){
//   // let templateLink = createA('https://editor.p5js.org/conniehu25/sketches/DqXRNOKrr', 'template');
//   let templateLink = createA('http://p5js.org/', 'template');
//   // templateLink.setAttribute("target", "_blank")
//   templateLink.position(15+buttonBarX,9+buttonBarY);
//   templateLink.style('color', "white");
//   templateLink.style('text-decoration', 'none')
//   templateLink.style('font-family','Inconsolata')
// }
