// 수신된 정수로 LED 점멸 제어
const int LED[] = {6, 7, 8, 12};

void setup() {
  for(int i = 0; i<4; i++){
    pinMode(LED[i], OUTPUT);
  }
  Serial.begin(9600);
}

void loop() {
  // 수신 여부 검사
  while (Serial.available()) {
    int value = Serial.read();
    Serial.println(value);
    // LED 모두 소등 
    for(int i = 0; i<4; i++){
      digitalWrite(LED[i], 0);
    }

    // LED 점등 
    for(int i = 0; i < value; i++){
      digitalWrite(LED[i], 1);
    }
  }
}
