// 수신된 정수로 서보모터 각도 제어
#include <Servo.h>
#define SERVO A0
Servo servo;

void setup() {
  pinMode(SERVO, OUTPUT);
  servo.attach(SERVO);
  Serial.begin(9600);
}

void loop() {
  while(Serial.available()){      // 검사
    int value = Serial.read();    // 수신 
    servo.write(value);           // 제어
  }
}
