/*
This code is to connect a micro:bit using BLE UART to p5.

API:

microBitConnect()

This function should be called by an user event, like  mousePressed() https://p5js.org/reference/#/p5/mousePressed
or KeyPressed() https://p5js.org/reference/#/p5/keyPressed

microBitDisconnect()

This function disconnects the microbit from the device running the p5 sketch.

microBitWriteString("string")

Writes a text to the microbit

microBitReceivedMessage(message)

This is a function that is called when the microBit sends a message to the device running P5


Example sketch.js

//This code sends the current key pressed to the microbit, and shows the last message of the microbit in the middle of the screen
function setup() {
  createCanvas(400, 400);
}
lastMessage = "";
function draw() {
  background(220);
  text(lastMessage,200,200);
}

function mousePressed(){
  microBitConnect()
}

function keyPressed(){
  microBitWriteString(key + "\n")
}
function microBitReceivedMessage(message){
  lastMessage = message;
}

*/

// https://lancaster-university.github.io/microbit-docs/resources/bluetooth/bluetooth_profile.html
// Nordic Semiconductor의 BLE를 사용한 UART/직렬 포트 에뮬레이션 구현
const UART_SERVICE_UUID = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';

// micro:bit가 바이트 배열을 전송할 수 있도록 하는 특성 UUID
const UART_TX_CHARACTERISTIC_UUID = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';

// 연결된 클라이언트가 바이트 배열을 전송할 수 있도록 하는 특성 UUID
const UART_RX_CHARACTERISTIC_UUID = '6e400003-b5a3-f393-e0a9-e50e24dcca9e';

let uBitDevice; // micro:bit BLE 장치 참조
let rxCharacteristic; // RX 특성 참조

// 문자열을 micro:bit로 전송하는 함수
async function microBitWriteString(string) {
	if (!rxCharacteristic) {
		return;
	}

	try {
		let encoder = new TextEncoder();
		rxCharacteristic.writeValue(encoder.encode(string));
	} catch (error) {
		console.log(error);
	}
}

// micro:bit와 연결하는 함수
async function microBitConnect() {
	try {
		console.log('Bluetooth 장치 요청 중...');
		uBitDevice = await navigator.bluetooth.requestDevice({
			filters: [{ namePrefix: 'BBC micro:bit' }], // micro:bit 이름으로 필터링
			optionalServices: [UART_SERVICE_UUID], // UART 서비스 UUID 포함
		});

		console.log('GATT 서버에 연결 중...');
		const server = await uBitDevice.gatt.connect();

		console.log('서비스 가져오는 중...');
		const service = await server.getPrimaryService(UART_SERVICE_UUID);

		console.log('특성 가져오는 중...');
		const txCharacteristic = await service.getCharacteristic(
			UART_TX_CHARACTERISTIC_UUID
		);
		txCharacteristic.startNotifications();
		txCharacteristic.addEventListener(
			'characteristicvaluechanged',
			onTxCharacteristicValueChanged
		);

		rxCharacteristic = await service.getCharacteristic(
			UART_RX_CHARACTERISTIC_UUID
		);
	} catch (error) {
		console.log(error);
	}
}

// micro:bit와 연결을 끊는 함수
function microBitDisconnect() {
	if (!uBitDevice) {
		return;
	}

	if (uBitDevice.gatt.connected) {
		uBitDevice.gatt.disconnect();
		console.log('연결 끊김');
	}
}

// TX 특성에서 데이터가 변경되었을 때 호출되는 함수
function onTxCharacteristicValueChanged(event) {
	let receivedData = [];
	for (var i = 0; i < event.target.value.byteLength; i++) {
		receivedData[i] = event.target.value.getUint8(i); // 바이트 데이터를 배열로 변환
	}
	const receivedString = String.fromCharCode.apply(null, receivedData); // 바이트 데이터를 문자열로 변환
	if (typeof microBitReceivedMessage !== 'undefined') {
		microBitReceivedMessage(receivedString); // 사용자 정의 함수 호출
	} else {
		console.log('microBitReceivedMessage 함수가 정의되지 않았습니다.');
	}
	console.log(receivedString); // 수신된 문자열 출력
}
