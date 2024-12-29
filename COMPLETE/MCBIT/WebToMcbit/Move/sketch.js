// 키워드(→왼쪽, 오른쪽, 위쪽, 아래쪽, 정지)를 포함한 문장을 인식하고 원의 이동/정지 제어
let serial; // 시리얼포트 객체
let rec = new p5.SpeechRec('ko-KR', recResult);
let x = 200,
	y = 200,
	dx = 0,
	dy = 0;

function setup() {
	createCanvas(400, 400);

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

	rec.onEnd = recEnd;
	rec.start(true, true);
}

function draw() {
	// 페이딩 효과
	noStroke();
	fill(0, 10);
	rect(0, 0, width, height);

	textSize(20);
	fill(255, 255, 0);
	text('인식단어: 왼쪽, 오른쪽, 위쪽, 아래쪽, 정지', 10, 30);

	fill(255);
	ellipse(x, y, 50, 50);

	x += dx;
	y += dy;
	if (x < 0) x = width;
	if (y < 0) y = height;
	if (x > width) x = 0;
	if (y > height) y = 0;
}

function recResult() {
	let result = rec.resultString;
	console.log(result);
	if (result.indexOf('왼쪽') !== -1) {
		dx = -1;
		dy = 0;
        serial.write('L');
	} else if (result.indexOf('오른쪽') !== -1) {
		dx = 1;
		dy = 0;
        serial.write('R');
	} else if (result.indexOf('위쪽') !== -1) {
		dx = 0;
		dy = -1;
        serial.write('U');
	} else if (result.indexOf('아래쪽') !== -1) {
		dx = 0;
		dy = 1;
        serial.write('D');
	} else if (result.indexOf('정지') !== -1) {
		dx = 0;
		dy = 0;
        serial.write('S');
	}
}

function recEnd() {
	console.log('[음성인식 재시작]');
	rec.start();
}
