// 마이크로 비트에서 Web으로 버튼값 전송하기
// 나침반 방향 값 받아서 나침반에 표시하기
let serial;
let data;
// 나침반 방향을 저장할 변수
let compassDirection = 0; // 초기 방향 (0도)
let compassLabel = 'N'; // 현재 나침반 방향

function setup() {
    createCanvas(500, 500);
    serial = new p5.WebSerial();
    serial.getPorts();
    serial.on('noport', () => {
        serial.requestPort();
        let portButton = createButton('포트선택');
        portButton.mousePressed(() => {
            serial.requestPort();
        });
    });
    serial.on('portavailable', () => {
        serial.open().then(() => {
            console.log('[포트 오픈]');
        });
    });
    serial.on('data', serialEvent); // 데이터 수신 설정
}

function draw() {
    background(240); // 부드러운 배경 색상

    // 나침반 중심 설정
    translate(width / 2, height / 2);

    // 나침반 외곽 원 그리기
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(0, 0, 300, 300);

    // 나침반 모양 그리기
    push();
    rotate(radians(compassDirection)); // 방향에 따라 회전

    // 동서남북 바늘 그리기    
    fill(255, 0, 0);
    triangle(-10, -140, 10, -140, 0, -170); // 검정색 바늘 (북)

    fill(0);
    beginShape();
    vertex(-10, -140);
    vertex(-15, 0);
    vertex(-10, 140);
    vertex(0, 130);
    vertex(10, 140);
    vertex(15, 0);
    vertex(10, -140);
    vertex(0, -130);
    endShape(CLOSE);

    pop();

    // 나침반 텍스트 표시
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(18);
    text('N', 0, -170); // 북쪽 표시
    text('E', 170, 0); // 동쪽 표시
    text('S', 0, 170); // 남쪽 표시
    text('W', -170, 0); // 서쪽 표시

    // 현재 각도 및 나침반 방향 표시
    fill(50);
    textSize(22);
    text(`각도: ${compassDirection.toFixed(1)}°`, 0, 220);
    textSize(28);
    fill(0, 102, 204);
    text(`방향: ${compassLabel}`, 0, 0);
}

// 수신값이 있으면 자동 호출
function serialEvent() {
    let rawData = serial.readLine(); // 한 줄 데이터를 읽음
    rawData = rawData.trim(); // 공백 제거
    console.log(rawData);
    if (rawData !== '' && !isNaN(rawData)) {
        compassDirection = parseFloat(rawData); // 숫자로 변환하여 방향 저장
        compassDirection = compassDirection % 360; // 방향은 0~359도로 제한
        updateCompassLabel();
    }
}

// 나침반 방향을 업데이트하는 함수
function updateCompassLabel() {
    if (compassDirection >= 310 || compassDirection <= 59) {
        compassLabel = 'N';
    } else if (compassDirection >= 250 && compassDirection <= 309) {
        compassLabel = 'W';
    } else if (compassDirection >= 140 && compassDirection <= 249) {
        compassLabel = 'S';
    } else if (compassDirection >= 60 && compassDirection <= 139) {
        compassLabel = 'E';
    }
}
