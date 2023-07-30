// 아두이노: 수신된 정수로 DC 모터 속도 제어

#define DCMOTOR_FWD 9     // DC 모터 전진 핀
#define DCMOTOR_REV 10    // DC 모터 후진 핀

void setup() {
  pinMode(DCMOTOR_FWD, OUTPUT);
  pinMode(DCMOTOR_REV, OUTPUT);
  Serial.begin(9600);
  while (Serial.available() == 0) {   // 수신 버퍼에 수신값이 없는 동안 반복 실행
    Serial.write('A');                // 시작신호 전송
    delay(300);                       // 0.3초 대기
  }
}

void loop() { }

void serialEvent() {                // 이벤트함수: 수신값이 있으면 자동 호출
  int value = Serial.read();        // 수신
  analogWrite(DCMOTOR_FWD, value);  // DC 모터 속도 제어
  analogWrite(DCMOTOR_REV, 0);      // DC 모터 속도 제어
  Serial.write('B');                // 송신
}
