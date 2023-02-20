let detailX;
let xUnit = 0; 
let yUnit = 0;
const trPos = [0, 0];
const targetPos = [0, 0];
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  detailX = createSlider(3, 24, 3);
  detailX.position(20, height - 150);
  detailX.style('width', '80px');  
}

function draw() {
  background(100);
 
  noFill();
  stroke(255);
  push();

  if(abs(targetPos[0] - trPos[0])> abs(xUnit)){
    trPos[0] += xUnit;
    trPos[1] += yUnit;
  }
  translate(trPos[0], trPos[1], -200);
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  sphere(100, detailX.value(), 24);
  pop();
}

function mouseClicked(){
  targetPos[0] = mouseX - width/2;
  targetPos[1] = mouseY - height/2;

  xUnit = (targetPos[0] - trPos[0]) * 0.02;
  yUnit = (targetPos[1] - trPos[1]) * 0.02;
  
}