// 버튼값 송신
#define BUTTON 2

void setup() {
  pinMode(BUTTON, INPUT);
  Serial.begin(9600);
}

void loop() {
  int value = digitalRead(BUTTON);
  if (value == 0) {
    Serial.write(0);      // 0 송신
  } else {
    Serial.write(1);      //  1 송신
  }
  delay(30);              // 전송 속도 30ms 지연
}
