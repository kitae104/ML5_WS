// 수신된 두 개의 정수로 서보모터 각도 및 LED 밝기 제어
#include <Servo.h>
#define LED 6                 // LED 핀
#define SERVO A0              // 서보모터 핀
Servo servo;                  // 서보모터 객체 생성

void setup() {
  pinMode(LED, OUTPUT);       // LED 출력 설정
  pinMode(SERVO, OUTPUT);     // 서보모터 출력 설정
  servo.attach(SERVO);        // 서보모터 핀에 연결
  Serial.begin(9600);         // 시리얼 통신 속도 9600 bps
}

void loop() {
  while (Serial.available() >= 3) {   // 수신 데이터가 3바이트 이상이면
    int value = Serial.read();        // 수신 데이터 읽기
    if (value == 'A') {               // 수신 데이터가 'A'이면 - 동기신호 확인 
      int value1 = Serial.read();     // 수신 데이터 읽기(서보모터 각도)
      int value2 = Serial.read();     // 수신 데이터 읽기(LED 밝기)
      servo.write(value1);            // 서보모터 각도 제어
      analogWrite(LED, value2);       // LED 밝기 제어
    }
  }
}
