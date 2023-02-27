// 신경망 데이터 수집 및 학습 
let model; 
let targetLabel = 'C';
let state = 'collection';

let notes = {
  C: 261.6256,
  D: 293.6648,
  E: 329.6276,
  F: 349.2282,
  G: 391.9954,
  A: 440.0000,
  B: 493.8833
}

function setup(){
  createCanvas(400, 400);  

  let options = {    
    inputs: ['x', 'y'],     // 입력 
    outputs: ['label'],
    task: 'classification',
    debug: 'true',          // 시각화 활성화 
    learningRate: 0.1       // 학습률
  };

  model = ml5.neuralNetwork(options, dataLoaded);
  // 현재 데이터 불러오는데 보여주지 못하는 상태임
  model.loadData('mouse-notes.json', dataLoaded);
  background(255);
}

function dataLoaded(){
  console.log(model);
  let data = model.neuralNetworkData.data.raw;
  console.log(data);
  // //let data = model.getData();
  // for(let i=0; i< data.length; i++){
  //   let inputs = data[i].xs.xs;
  //   let target = data[i].xs.ys;

  //   stroke(0);
  //   noFill();
  //   ellipse(inputs.x, inputs.y, 24);
  //   fill(0);
  //   noStroke();
  //   textAlign(CENTER, CENTER);
  //   text(target.label, inputs.x, inputs.y);
  // }

  state = 'training';
    console.log('starting training');
    model.normalizeData();
    let options = {
      epochs: 200     // epochs, batchSize
    }
    model.train(options, whileTraining, finishedTraining);
}

function keyPressed(){

  if(key == 't'){         // train
    state = 'training';
    console.log('starting training');
    model.normalizeData();
    let options = {
      epochs: 200     // epochs, batchSize
    }
    model.train(options, whileTraining, finishedTraining);
  } else if(key == 's'){    
    model.saveData("mouse-notes");    // 데이터 저장 
  } else {
    targetLabel = key.toUpperCase();
  }
}

function whileTraining(epoch, loss){
  console.log(epoch);
}

function finishedTraining(){
  console.log("finished training.");
  state = 'prediction';
}

function mousePressed(){

  let inputs = {
    x: mouseX,
    y: mouseY
  };

  if(state == 'collection'){
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
  } else if(state == 'prediction'){
    model.classify(inputs, gotResults);
  }
}

function gotResults(error, results){
  if(error){
    console.error(error);
    return;
  }
  console.log(results);
  stroke(0);
  fill(0, 0, 255, 100);
  ellipse(mouseX, mouseY, 24);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  let label = results[0].label;
  text(label, mouseX, mouseY);


}

function draw() {
  //background(255);
}
