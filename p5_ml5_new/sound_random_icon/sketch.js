// 랜덤하게 움직이는 아이콘을 마우스로 맞추면 음성합성으로 아이콘명을 출력하고 점수 증가
// https://developers.google.com/fonts/docs/material_icons?hl=ko 참조

let speech = new p5.Speech();
let words = ['자전거', '버스', '비행기', '보트', '택시', '지하철'];
let traffic = ['eb29', 'e530', 'e539', 'e532', 'e559', 'e56f'];
let c, size = 100, index = 0, x = 0, y = 0, tx = 0.0, ty = 0.5, score = 0;

function setup() {
    createCanvas(640, 480);
    textFont('Material Icons');
    index = int(random(traffic.length));
    c = color(random(255), random(255), random(255));
    speech.setLang('ko-KR');
    speech.started(speechStart);

    d = createDiv('');                  // <div> 요소 생성
    d.style('font-size', '20px');	    // 폰트 크기(20픽셀) 설정
}

function draw() {
    background(0);  
    fill(c);

    textSize(size);

    let icon = char(unhex(traffic[index]));
    text(icon, x, y);

    x = noise(tx) * width;
    y = noise(ty) * height;
    tx += 0.01;
    ty += 0.01;

    d.html('점수 : ' + score);       // <div> 요소에 인식 결과와 송신값 표시
}

// 랜덤 이동하는 사각형을 마우스로 눌러 맞추면 색상이 랜덤하게 변경
function mousePressed() {
    if (mouseX > x && mouseX < x+size && mouseY > y-size && mouseY < y) {
        speech.speak(words[index]);
        //c = color(random(255), random(255), random(255));
        score++;
    }
}

function speechStart() {
    index = int(random(traffic.length));
    c = color(random(255), random(255), random(255));
}