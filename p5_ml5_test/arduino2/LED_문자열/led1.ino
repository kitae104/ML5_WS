// 아두이노: 수신된 정수로 LED 점멸 제어
#define LED 6

void setup() {
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
}

void loop() {
  while (Serial.available()) {
    int value = Serial.readStringUtil('\n');
    if (value == "on") {
      digitalWrite(LED, 1);
    } else {
      digitalWrite(LED, 0);
    }
  }
}