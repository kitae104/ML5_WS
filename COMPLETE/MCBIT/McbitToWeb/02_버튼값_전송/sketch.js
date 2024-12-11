// 버튼값 수신하여 원 색상 변경
let port;
let value;

function setup() {
    createCanvas(500, 500);
    port = new p5.WebSerial();
    port.getPorts();
    port.on('noport', () => {
        port.requestPort();
        let portButton = createButton('포트선택');
        portButton.mousePressed(() => {
            port.requestPort();
        });
    });
    port.on('portavailable', () => {
        port.open().then(() => {
            console.log('[포트 오픈]');
        });
    });  
    port.on('data', serialEvent); // 데이터 수신 설정 
} 

let cnt = 0;
function draw() {
    background(0);
    if (value === 49) {
        fill(255, 255, 0);
        //cnt++;
    } else if(value == 50){
        fill(255, 0, 0);
        //cnt--;
    }
    ellipse(width/2 + cnt, height/2 + cnt, 200, 200);

    fill(255, 255, 0);
    textAlign(CENTER);
    textSize(15);
    text("수신된 데이터 : " + value, width/2, 450);
}

// 수신값이 있으면 자동 호출
function serialEvent() {
    value = port.read();  
}