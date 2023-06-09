// 아두이노: 수신된 정수로 부저 제어
#define BUZZER 13

void setup( ) {
  Serial.begin(9600);
  pinMode(BUZZER, OUTPUT);
}

void loop() {
  while (Serial.available()) {
    int value = Serial.read();
    if (value == 1) {
      tone(BUZZER, 262);
    } else {
      noTone(BUZZER);
    }
  }
}