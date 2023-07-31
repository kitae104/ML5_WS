// 랜덤하게 움직이는 사각형을 마우스로 눌러 맞추면 색상 변경

let x, y, c, w = 50.0, h = 50.0, tx = 0.0, ty = 0.5;
let score = 0;
let d;

function setup() {
    createCanvas(640, 480);
    c = color(random(255), random(255), random(255));
    d = createDiv('');                  // <div> 요소 생성
    d.style('font-size', '20px');	    // 폰트 크기(20픽셀) 설정
}

function draw() {
    background(0);
    x = noise(tx) * width;        // 랜덤한 x좌표
    y = noise(ty) * height;       // 랜덤한 y좌표

    fill(c);
    rect(x, y, w, h);
    tx += 0.01;
    ty += 0.01;

    d.html('점수 : ' + score);       // <div> 요소에 인식 결과와 송신값 표시
}

// 랜덤 이동하는 사각형을 마우스로 눌러 맞추면 색상이 랜덤하게 변경
function mousePressed() {
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        c = color(random(255), random(255), random(255));
        score++;
    }
}