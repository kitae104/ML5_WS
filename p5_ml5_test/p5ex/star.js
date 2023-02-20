function setup() {
  createCanvas(720, 400);
}

let angle = 0;
function draw() {
  background(102);

  push(); //
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 200.0); // 자동 회전
  star(0, 0, 5, 70, 3); // x, y, r1, r2, 각형
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  star(0, 0, sin(radians(angle++)) * 100 + 150, 100, 40);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5);
  pop();  
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints; // 각도
  let halfAngle = angle / 2.0; // 들어간 각도

  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy); // 긴 선을 위한 정점

    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy); // 잛은 선을 위한 각도
  }
  endShape(CLOSE);
}
