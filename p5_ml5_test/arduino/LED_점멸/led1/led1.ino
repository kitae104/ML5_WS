// 아두이노: 수신된 정수로 LED 점멸 제어
#define LED 13

void setup() {
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
}

void loop() {
  while (Serial.available()) {
    int value = Serial.read();
    if (value == 1) {
      digitalWrite(LED, 1);
    } else if (value == 0) {
      digitalWrite(LED, 0);
    }
  }
}