let x;
let y;
let outsideRadius = 150;  // 바깥 반지름 
let insideRadius = 100;   // 안쪽 반지름 

function setup() {
  createCanvas(720, 400);
  background(204);

  // 중간 위치 
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(204);

  // 마우스의 위치를 매핑함 6 ~ 60으로 매핑 
  let numPoints = int(map(mouseX, 0, width, 6, 60));
  let angle = 0;
  let angleStep = 180.0 / numPoints;

  // 삼각형 모양 설정 - 다른 모양으로 변경
  beginShape(TESS);
  for (let i = 0; i <= numPoints; i++) {
    let px = x + cos(radians(angle)) * outsideRadius;
    let py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py);
    angle += angleStep;
  }
  endShape();
}
