function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(102);

  push();
  translate(width * 0.2, height * 0.5);   // 도형 이동 
  rotate(frameCount / 200.0);   // 자동 회전
  //console.log(frameCount);
  polygon(0, 0, 82, 3);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  polygon(0, 0, 80, 20);      // 반지름 80
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  polygon(0, 0, 70, 7);
  pop();
}

function polygon(x, y, radius, npoints) {
  // npoint 각형에 대한 각도 계산
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) { // a는 각도
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
