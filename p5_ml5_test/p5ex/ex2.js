let num = 1;
function setup() {
  console.log("setup!");
  createCanvas(400, 400);
}

function draw() {
  background(255, 255, 255);
  line(15, 25, 70, 90);
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 80, 80);
  }
}
