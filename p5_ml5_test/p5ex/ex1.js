let num = 1;
function setup() {
  console.log("setup!");
  createCanvas(600, 400);
}

function draw() {  
  num += 1;
  background(num);
  console.log(num);
  if(num == 255){
    num = 0;
  }
}
