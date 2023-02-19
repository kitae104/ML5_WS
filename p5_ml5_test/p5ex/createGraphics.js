let pg;

function setup() {
  createCanvas(600, 400);
  pg = createGraphics(300, 250);
}

function draw(){
  fill(255, 0, 0);
  rect(0, 0, width, height);

  fill(255);
  noStroke();           // 테투리 없음                 
  ellipse(mouseX, mouseY, 60, 60);

  pg.background(51);
  pg.noFill();          // 색 채움 없음 
  pg.stroke(255);       // 흰색 테두리 
  pg.ellipse(mouseX - 150, mouseY - 70, 60, 60);

  image(pg, 150, 70);
}