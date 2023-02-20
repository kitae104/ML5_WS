function setup() {
  createCanvas(720, 400);
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  for (let i = 0; i < 200; i += 20) {
     bezier(
       mouseX - i / 2.0,    // 시작 x
       40 + i,              // 시작 y
       410,                 // 조정 1 x
       20,                  // 조정 1 y
       440,                 // 조정 2 x
       300,                 // 조정 2 y
       240 - i / 16.0,      // 끝점 x
       300 + i / 8.0        // 끝점 y
     );
  }
}