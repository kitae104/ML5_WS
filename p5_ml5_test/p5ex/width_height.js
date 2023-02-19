function setup(){
  createCanvas(500, 400);
  //noLoop();
  frameRate(10);
}

let w = 0;

function draw(){
  background(127); 
  noStroke();

  w += 3;

  for (let i = 0; i < height; i += 20) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    fill(r, g, b);
    rect(0, i, w, 10);
    fill(255);
    rect(i, 0, 10, height);    
    if(w === width){
      w = 0;
    }
  }
}