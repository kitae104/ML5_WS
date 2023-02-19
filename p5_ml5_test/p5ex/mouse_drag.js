function setup() {
  createCanvas(600, 400);    
}

function toRad(d){
  return d * Math.PI / 180;
}

let r = 1;

function draw(){
  clear();
  for(let i = 0; i < 6; i++){
    let xPos = Math.cos(toRod(i*60)) * r;
    let yPos = Math.sin(toRod(i*60)) * r;
    ellipse(xPos, yPos, 30, 30);      
  }
}