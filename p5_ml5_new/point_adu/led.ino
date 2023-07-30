// 아두이노: 수신된 정수로 LED 밝기 제어

#define LED 6

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(9600);
  while (Serial.available() == 0) {  // 수신 버퍼에 수신값이 없는 동안 반복 실행
    Serial.write('A');      // 시작신호 전송
    delay(300);       // 0.3초 대기
  }
}

void loop() { }

void serialEvent() {      // 이벤트함수: 수신값이 있으면 자동 호출
  int value = Serial.read();    // 수신
  analogWrite(LED, value);    // 수신값에 따라 LED 밝기 변화
  Serial.write('B');      // 송신
}
