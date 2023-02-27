// 신경망 데이터 수집 및 학습 
let model; 
let targetLabel = 'C';

function setup(){
  createCanvas(400, 400);  

  let options = {
    inputs: ['x', 'y'],     // 입력 
    outputs: ['label'],
    task: 'classification',
    debug: 'true'           // 시각화 활성화 
  };

  model = ml5.neuralNetwork(options);
  background(255);
}

function keyPressed(){

  if(key == 't'){
    console.log('starting training');
    model.normalizeData();
    let options = {
      epochs: 200     // epochs, batchSize
    }
    model.train(options, whileTraining, finishedTraining);
  } else {
    targetLabel = key.toUpperCase();
  }
}

function whileTraining(epoch, loss){
  console.log(epoch);
}

function finishedTraining(){
  console.log("finished training.");
}

function mousePressed(){

  let inputs = {
    x: mouseX,
    y: mouseY
  };

  let target = {
    label: targetLabel
  };

  model.addData(inputs, target);

  stroke(0);
  noFill();
  ellipse(mouseX, mouseY, 24);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(targetLabel, mouseX, mouseY);
}

function draw() {
  //background(255);
}
