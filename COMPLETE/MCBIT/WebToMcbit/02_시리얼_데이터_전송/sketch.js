let serial;
let portName = 'COM3'; // 연결할 포트 이름 (알맞게 설정)
let textInput;
let numberInput;
let sendButton;
let sliderR;

function setup() {
    createCanvas(400, 400);  

    // 시리얼 포트 초기화
    serial = new p5.WebSerial();  
    serial.open(portName); // 포트 열기
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

    // 텍스트 입력 요소 생성
    textInput = createInput('');
    textInput.position(20, 20);
    textInput.style("width: 350px");

    // 숫자 입력 요소 생성
    numberInput = createInput('');
    numberInput.attribute('type', 'number'); // 숫자 입력 필드로 설정
    numberInput.position(20, 60);
    numberInput.style("width: 350px");

    sliderR = createSlider(0,255);
    sliderR.position(width/2 - 175, 90);
    sliderR.changed(sendData); // 값 변경 시 데이터 전송
    sliderR.style("width:350px");

    // 전송 버튼 생성
    sendButton = createButton('Send to Micro:bit');
    sendButton.position(20, 120);
    sendButton.mousePressed(sendData); // 클릭 시 데이터 전송
}

// 입력 값을 시리얼 포트를 통해 전송
function sendData() {
    let textValue = textInput.value(); // 텍스트 입력 값 가져오기
    let numberValue = numberInput.value(); // 숫자 입력 값 가져오기
    let sliderValue = sliderR.value();

    // 데이터 포맷 구성 (예: JSON 형태)
    let dataToSend = textValue + ',' + numberValue + ',' + sliderValue;
    //let dataToSend = numberValue;
    //let dataToSend = sliderValue;
        
    // 시리얼 포트를 통해 데이터 전송
    serial.write(dataToSend);
    console.log('Sent:', dataToSend);
}
