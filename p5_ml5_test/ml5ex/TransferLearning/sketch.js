let mobilenet;

function setup(){
  createCanvas(640, 480);
  puffin = createImg('puffin.jpg', imageReady);
  puffin.hide();
  background(0);

  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function imageReady(){
  image(puffin, 0, 0, puffin.width, puffin.height);
}

function modelReady() {
  console.log('Model is ready!!');
  mobilenet.predict(puffin, gotResults);
}

function gotResults(error, results){
  if(error){
    console.error(error);
  } else {
    console.log(results)
    let label = results[0].label;
    let conf = results[0].confidence;
    fill(0);
    textSize(64);
    text(label, 10, height - 100);
    createP(label);
    createP(conf);
  }
}
