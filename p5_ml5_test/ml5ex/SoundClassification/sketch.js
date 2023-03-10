console.log("ml5 : " , ml5.version);

let soundClassifier;
let resultP;

function preload(){
  let options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
}

function setup(){
  createCanvas(400, 400);
  resultP = createP('waiting...');
  resultP.style('font-size', '32pt');
  soundClassifier.classify(gotResults);
}

function gotResults(error, results){
  if(error){
    console.log("something went wrong");
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  resultP.html(`${results[0].label} : ${results[0].confidence}`);
}

function draw(){
  //background(220);
}