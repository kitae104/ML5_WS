let serial;                      // 시리얼 포트
let portName = 'COM6';           // 포트 이름
let options = { baudrate: 9600}; // 전송 속도
let inData;                     // 시리얼 포트에서 읽어온 데이터
let portSelector;               // 포트 선택 select 태그
let serialDiv;          

function setup() {

  createCanvas(400, 400);

  serial = new p5.SerialPort(); // 시리얼 포트 객체 생성
  serial.on('list', printList); // 시리얼 포트 목록을 받으면 printList 함수 호출
  serial.on('connected', serverConnected); // 시리얼 포트 연결되면 serverConnected 함수 호출
  serial.on('open', portOpen);        // 시리얼 포트 열리면 portOpen 함수 호출
  serial.on('data', serialEvent);     // 데이터가 들어오면 serialEvent 함수 호출
  serial.on('error', serialError);    // 에러가 발생하면 serialError 함수 호출
  serial.on('close', portClose);      // 시리얼 포트가 닫히면 portClose 함수 호출
 
  serial.list();                      // 시리얼 포트 목록을 요청
  
  serial.open(portName, options);     // 시리얼 포트를 열기  
}
 
// 마이크로비트와 포트 리스트 출력 
function printList(portList) {  
  portSelector = createSelect();                // select 태그 생성
  portSelector.position(10, 10);                // select 태그의 위치 
  
  for (var i = 0; i < portList.length; i++) {   
    portSelector.option(portList[i]);           // 포트 리스트를 select 태그에 추가
  }  
  portSelector.changed(mySelectEvent);          // select 태그의 값이 바뀌면 mySelectEvent 함수 호출
}

function mySelectEvent() {
  let item = portSelector.value();  
  console.log(item); 
  if (serial.serialport != null) {              // 시리얼 포트가 열려있으면
    serial.close();                             // 시리얼 포트 닫기
  }
  
  serial.open(item, options);                            // 선택한 포트 열기
}


function serverConnected() {
  console.log('connected to server.');
}
 
function portOpen() {
  console.log('the serial port opened.')
}
 
function serialEvent() {
  inData = Number(serial.read()); // 데이터를 읽어서 inData 변수에 저장
  console.log(inData);        // 데이터를 콘솔에 출력
  // let inString = serial.readLine();
  // console.log(inString);
  // // check to see that there's actually a string there:
  // if (inString.length > 0 ) {
  //   // convert it to a number:
  //   inData = Number(inString);
  //   console.log(inData);
  // }

}
 
function serialError(err) {
  console.log('Serial Port 사용 중 문제가 발생하였습니다.' + err);
}
 
function portClose() {
  console.log('serial port가 닫혔습니다.');
}

function draw() {
  background(0);
  fill(255);
  text("sensor value: " + inData, 30, 50);
}



