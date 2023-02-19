function setup() {
  createCanvas(720, 400);
  background(51);
  noStroke();
  //noLoop();
}

let s = 1;     // 크기 단계 변경 
function draw() {
  drawTarget(width * 0.25, height * 0.4, 200, 4);
  drawTarget(width * 0.5, height * 0.5, 300, s);
  drawTarget(width * 0.75, height * 0.3, 120, 6);
  s++;
  if (s > 100) {
    s = 1;
  }
}

function drawTarget(xloc, yloc, size, num) {
  const grayvalues = 255 / num;
  const steps = size / num;
  for (let i = 0; i < num; i++) {
    fill(i * grayvalues);
    ellipse(xloc, yloc, size - i * steps, size - i * steps);
  }
}
