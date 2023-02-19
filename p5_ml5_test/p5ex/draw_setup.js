let y = 100;
let flag = true;
function setup() {
  createCanvas(500, 400);
  stroke(255);
  //noLoop();
  frameRate(30);
}

function draw() {
  background(0);
  y = y - 1;

  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

function mouseClicked() {
  if (!flag) {
    // frameRate(0);
    noLoop();
    flag = true;
  } else {
    //frameRate(30);
    loop();
    flag = false;
  }
}
