// UART 서비스 UUID (micro:bit에서 정의된 고유 서비스 ID)
const UART_SERVICE_UUID = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";

// micro:bit가 바이트 배열을 전송할 수 있도록 하는 TX 특성 UUID
const UART_TX_CHARACTERISTIC_UUID = "6e400002-b5a3-f393-e0a9-e50e24dcca9e";

// 연결된 클라이언트가 바이트 배열을 micro:bit에 보낼 수 있도록 하는 RX 특성 UUID
const UART_RX_CHARACTERISTIC_UUID = "6e400003-b5a3-f393-e0a9-e50e24dcca9e";

let uBitDevice; // micro:bit 장치 객체
let rxCharacteristic; // RX 특성 객체

// micro:bit로 문자열 데이터를 전송하는 함수
async function microBitWriteString(string) {
  if (!rxCharacteristic) { // RX 특성이 없으면 종료
    return;
  }

  try {
    let encoder = new TextEncoder(); // 문자열을 바이트 배열로 변환하는 인코더 생성
    rxCharacteristic.writeValue(encoder.encode(string)); // 문자열을 micro:bit로 전송
  } catch (error) {
    console.log(error); // 오류가 발생하면 콘솔에 출력
  }
}

// micro:bit와 블루투스 연결을 설정하는 함수
async function microBitConnect() {
  try {
    console.log("블루투스 장치 요청 중...");
    uBitDevice = await navigator.bluetooth.requestDevice({
      filters: [{ namePrefix: "BBC micro:bit" }], // micro:bit 장치 필터 설정
      optionalServices: [UART_SERVICE_UUID] // 사용할 서비스 UUID 지정
    });

    console.log("GATT 서버에 연결 중...");
    const server = await uBitDevice.gatt.connect(); // GATT 서버에 연결

    console.log("UART 서비스 가져오는 중...");
    const service = await server.getPrimaryService(UART_SERVICE_UUID); // UART 서비스 가져오기

    console.log("특성 가져오는 중...");
    const txCharacteristic = await service.getCharacteristic(
      UART_TX_CHARACTERISTIC_UUID
    ); // TX 특성 가져오기
    txCharacteristic.startNotifications(); // 알림 활성화
    txCharacteristic.addEventListener(
      "characteristicvaluechanged",
      onTxCharacteristicValueChanged
    ); // TX 특성에서 데이터 수신 시 이벤트 처리

    rxCharacteristic = await service.getCharacteristic(
      UART_RX_CHARACTERISTIC_UUID
    ); // RX 특성 가져오기
  } catch (error) {
    console.log(error); // 오류가 발생하면 콘솔에 출력
  }
}

// micro:bit와의 블루투스 연결을 해제하는 함수
function microBitDisconnect() {
  if (!uBitDevice) { // 장치가 없으면 종료
    return;
  }

  if (uBitDevice.gatt.connected) { // GATT 서버에 연결되어 있으면
    uBitDevice.gatt.disconnect(); // 연결 해제
    console.log("연결이 해제되었습니다.");
  }
}

// TX 특성에서 데이터가 변경되었을 때 호출되는 이벤트 핸들러
function onTxCharacteristicValueChanged(event) {
  let receivedData = []; // 수신된 데이터를 저장할 배열
  for (var i = 0; i < event.target.value.byteLength; i++) {
    receivedData[i] = event.target.value.getUint8(i); // 바이트 데이터를 배열로 저장
  }
  const receivedString = String.fromCharCode.apply(null, receivedData); // 바이트 배열을 문자열로 변환

  // micro:bit에서 받은 메시지를 처리하는 함수가 정의되어 있다면 호출
  if (typeof microBitReceivedMessage !== 'undefined') {
    microBitReceivedMessage(receivedString); // 수신된 문자열 전달
  } else {
    console.log("microBitReceivedMessage가 정의되지 않았습니다.");
  }
  console.log(receivedString); // 수신된 문자열을 콘솔에 출력
}
